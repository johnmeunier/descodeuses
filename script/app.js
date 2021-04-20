document.querySelector("#toggleTheme").addEventListener("click", () => {
  const $body = document.querySelector("body");
  $body.dataset.theme = $body.dataset.theme === "light" ? "dark" : "light";
});
