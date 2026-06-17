(function () {
  function applyTheme(mode) {
    var theme = mode === "dark" ? "dark" : "light";
    document.documentElement.dataset.mode = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("mode", theme);
    localStorage.setItem("theme", theme);

    document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
      menu.classList.toggle("dropdown-menu-dark", theme === "dark");
    });

    document.querySelectorAll(".theme-switch-button").forEach(function (button) {
      button.setAttribute("title", theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환");
      button.setAttribute("aria-label", theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환");
    });
  }

  function normalizeInitialTheme() {
    var current = localStorage.getItem("mode") || document.documentElement.dataset.mode || "light";
    if (current !== "dark" && current !== "light") {
      current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    }
    applyTheme(current);
  }

  document.addEventListener("DOMContentLoaded", function () {
    window.setTimeout(normalizeInitialTheme, 0);
  });

  document.addEventListener(
    "click",
    function (event) {
      var button = event.target.closest(".theme-switch-button");
      if (!button) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      var current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
      applyTheme(current === "dark" ? "light" : "dark");
    },
    true
  );
})();
