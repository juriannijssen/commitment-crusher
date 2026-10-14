/* A single example question: type, hold, select, replace. */
(function () {
  var preview = document.querySelector(".mcp-question-preview");
  if (!preview) return;

  var text = document.getElementById("mcp-example-question");
  var setupLink = preview.querySelector(".mcp-setup-button");
  var setup = document.getElementById("mcp-setup");
  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var questions = [
    text.textContent,
    "What changed between Barclays’ latest energy policies?",
    "Where do coal restrictions allow exceptions?",
    "Which newly added documents cover oil and gas?",
    "Which policies use ‘phase out’, and for what?",
    "What do bank policies say about Indigenous rights?"
  ];
  var index = 0;
  var length = 0;
  var phase = "typing";
  var delay = 600;
  var timer;
  var inView = true;

  function canAnimate() {
    return !motion.matches && !document.hidden && inView;
  }

  function schedule() {
    window.clearTimeout(timer);
    if (canAnimate()) timer = window.setTimeout(tick, delay);
  }

  function tick() {
    var question = questions[index];
    if (phase === "typing") {
      length += 1;
      text.textContent = question.slice(0, length);
      if (length === question.length) {
        phase = "holding";
        delay = 3200;
      } else {
        delay = /[,.?]/.test(question[length - 1]) ? 130 : 42;
      }
    } else if (phase === "holding") {
      phase = "selected";
      preview.classList.add("is-selected");
      delay = 380;
    } else {
      preview.classList.remove("is-selected");
      text.textContent = "";
      length = 0;
      index = (index + 1) % questions.length;
      phase = "typing";
      delay = 160;
    }
    schedule();
  }

  function sync() {
    preview.classList.toggle("is-animated", !motion.matches);
    preview.classList.toggle("is-paused", !canAnimate());
    schedule();
  }

  function resetForMotion() {
    index = 0;
    length = motion.matches ? questions[0].length : 0;
    phase = length ? "holding" : "typing";
    delay = length ? 3200 : 600;
    text.textContent = questions[0].slice(0, length);
    preview.classList.remove("is-selected");
    sync();
  }

  setupLink.addEventListener("click", function (event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setup.focus({ preventScroll: true });
    setup.scrollIntoView({ behavior: motion.matches ? "auto" : "smooth", block: "start" });
  });
  document.addEventListener("visibilitychange", sync);
  motion.addEventListener("change", resetForMotion);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
      sync();
    }).observe(preview.querySelector(".mcp-question-composer"));
  }
  resetForMotion();
})();
