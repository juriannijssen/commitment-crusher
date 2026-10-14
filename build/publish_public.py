#!/usr/bin/env python3
"""Publish the public part of prototype/ to the Commitment Crusher GitHub Pages site.

The site is served from its own branch, gh-pages, which holds exactly one
commit: every publish replaces it instead of adding to it. However often you
publish, the public repository holds one copy of the site, not one per
publish. The history lives here, in Watchtower.

What is published: everything in prototype/ except what is listed in PRIVATE
below (the Watchtower app screens), including the social view and its images
in prototype/social/: the overview is what the team reviews the drafts on
(Jurian, 2026-10-02). Users are only sent links to the landing page and the
articles. Those images are not in Watchtower's git (they are rebuilt by
social/build.py), so the script checks that every image the social view names
is there before it publishes. The download zips stay local (Jurian, 2026-10-02):
they are left out, and the published data file drops their links, so the
public overview shows no download icon that would lead nowhere.

Usage:
    python3 prototype/build/publish_public.py              # prepare gh-pages in the local commitment-crusher repo
    python3 prototype/build/publish_public.py --dry-run    # only build the copy and show what would go out

Preparing writes one fresh commit as the local gh-pages branch of
../commitment-crusher, replacing what was there. It does not touch main or
the folder's files, and pushes nothing: the push is done in GitHub Desktop,
which holds the GitHub login (2026-10-02: command-line git on this Mac has
none). In GitHub Desktop: repository Commitment-Crusher → Current branch
gh-pages → "Publish branch" the first time, "Force push origin" after that.

Once, on GitHub: Settings → Pages → Build and deployment → Deploy from a
branch → gh-pages, folder / (root). Until then the site keeps serving main.
"""

import datetime, json, os, shutil, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
PROTO = os.path.dirname(HERE)
REPO = os.path.dirname(PROTO)
PUBLIC_REPO = os.path.join(os.path.dirname(REPO), "commitment-crusher")
BRANCH = "gh-pages"

# Not published. Paths are relative to prototype/; a trailing slash is a folder.
PRIVATE = [
    # Watchtower app screens, not part of the public site (as on main today)
    "comparison.html", "diff.html", "discovery.html", "document-repository.html",
    "synthesis.html", "synthesis-detail.html",
]


def social_images_missing():
    """Images and zips the social view names that are not on disk: the
    social build has not been run since the data file changed."""
    path = os.path.join(PROTO, "data", "social-table.js")
    if not os.path.exists(path):
        return []
    text = open(path).read()
    data = json.loads(text[text.index("=") + 1:].strip().rstrip(";"))
    missing = []
    for cid, entry in data.items():
        for name in entry.get("images") or []:
            if not os.path.exists(os.path.join(PROTO, "social", cid, name)):
                missing.append(f"social/{cid}/{name}")
    return missing


def drop_zip_links(dest):
    """The published data file without the zip links: no download icon on
    the public site, where the zips are not."""
    path = os.path.join(dest, "data", "social-table.js")
    if not os.path.exists(path):
        return
    text = open(path).read()
    head, body = text[:text.index("=") + 1], text[text.index("=") + 1:].strip().rstrip(";")
    data = json.loads(body)
    for entry in data.values():
        entry.pop("zip", None)
    open(path, "w").write(head + " " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")


def git(*args, cwd=REPO, check=True):
    return subprocess.run(["git", *args], cwd=cwd, capture_output=True, text=True, check=check).stdout.strip()


def private(rel):
    rel = rel.replace(os.sep, "/")
    return any(rel == p or (p.endswith("/") and rel.startswith(p)) for p in PRIVATE)


def build_copy(dest):
    """Copy the public files into dest; return (files, bytes)."""
    files, size = [], 0
    for root, dirs, names in os.walk(PROTO):
        dirs[:] = [d for d in dirs if not d.startswith(".") and d != "__pycache__"]
        for name in names:
            if name.startswith(".") or name.endswith(".pyc") or name.endswith(".zip"):
                continue
            src = os.path.join(root, name)
            rel = os.path.relpath(src, PROTO)
            if private(rel):
                continue
            out = os.path.join(dest, rel)
            os.makedirs(os.path.dirname(out), exist_ok=True)
            shutil.copy2(src, out)
            files.append(rel)
            size += os.path.getsize(out)
    drop_zip_links(dest)
    # No Jekyll on GitHub Pages: it would hide files that start with "_"
    # (build/_sprite.html). Same line endings as the public repo uses.
    open(os.path.join(dest, ".nojekyll"), "w").close()
    open(os.path.join(dest, ".gitattributes"), "w").write(
        "# Auto detect text files and perform LF normalization\n* text=auto\n")
    return files, size


def main(argv):
    dry_run = "--dry-run" in argv

    # Publish only a state that is committed in Watchtower, so the public site
    # can always be traced back to a commit here.
    dirty = git("status", "--porcelain", "--", "prototype")
    dirty = [l for l in dirty.splitlines() if not l[3:].startswith("prototype/social/")]
    if dirty:
        print("stop: prototype/ has uncommitted changes; commit them first:")
        print("\n".join("  " + l for l in dirty[:20]))
        return 1
    commit = git("rev-parse", "--short", "HEAD")

    missing = social_images_missing()
    if missing:
        print(f"stop: {len(missing)} social images are missing; run python3 social/build.py first:")
        print("\n".join("  " + m for m in missing[:10]))
        return 1

    dest = tempfile.mkdtemp(prefix="commitment-crusher-publish-")
    files, size = build_copy(dest)
    left_out = sorted(PRIVATE)
    print(f"{len(files)} files, {size / 1e6:.1f} MB, from Watchtower {commit}")
    print("left out: " + ", ".join(left_out))
    print(f"copy: {dest}")

    if dry_run:
        print("\ndry run: nothing prepared. Look at the copy above, then run again without --dry-run.")
        return 0

    # The branch can only be replaced while it is not the one checked out in
    # GitHub Desktop; there, the folder's files are the branch's files.
    if not os.path.isdir(os.path.join(PUBLIC_REPO, ".git")):
        print(f"stop: no git repository at {PUBLIC_REPO}")
        return 1
    if git("rev-parse", "--abbrev-ref", "HEAD", cwd=PUBLIC_REPO) == BRANCH:
        print(f"stop: {BRANCH} is the current branch in commitment-crusher. In GitHub Desktop,"
              " switch Current branch to main first, then run this again.")
        return 1

    # One commit with no history, made in the copy, then taken over as the
    # local gh-pages branch of commitment-crusher (replacing the old one).
    git("init", "-q", "-b", BRANCH, cwd=dest)
    git("add", "-A", cwd=dest)
    stamp = datetime.date.today().isoformat()
    git("commit", "-q", "-m", f"Publish {stamp} from Watchtower {commit}", cwd=dest)
    git("fetch", "-q", "--force", dest, f"{BRANCH}:{BRANCH}", cwd=PUBLIC_REPO)
    head = git("log", "-1", "--format=%h %s", BRANCH, cwd=PUBLIC_REPO)
    print(f"\nprepared: {BRANCH} in commitment-crusher is now one commit ({head}). Nothing is online yet.")
    print("Next, in GitHub Desktop: repository Commitment-Crusher → Current branch gh-pages →"
          " Publish branch (first time) or Force push origin.")
    shutil.rmtree(dest, ignore_errors=True)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
