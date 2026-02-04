const KEY = "portfolio-theme"; // "dark" | "light"

export function initTheme() {
  const saved = localStorage.getItem(KEY);
  const theme = (saved === "light" || saved === "dark") ? saved : "dark";
  document.documentElement.classList.toggle("light", theme === "light");
  document.documentElement.style.colorScheme = theme;
}

export function toggleTheme() {
  const isLight = document.documentElement.classList.toggle("light");
  const theme = isLight ? "light" : "dark";
  localStorage.setItem(KEY, theme);
  document.documentElement.style.colorScheme = theme;
  return theme;
}

export function currentTheme() {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}
