const themeToggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function syncThemeControl() {
  if (!themeToggle) return;
  const isDark = document.documentElement.dataset.theme === "dark";
  const icon = themeToggle.querySelector("span");
  if (icon) icon.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
  themeMeta?.setAttribute("content", isDark ? "#080e1b" : "#ffffff");
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("yebom-theme", nextTheme);
  syncThemeControl();
});

syncThemeControl();
