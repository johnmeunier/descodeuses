document.querySelector("#toggleTheme").addEventListener("click", () => {
  const $body = document.querySelector("body");
  $body.dataset.theme = $body.dataset.theme === "light" ? "dark" : "light";
});

const dateObject = new Date();
const currentDate = `${dateObject.getDate()}/${(dateObject.getMonth() + 1).toString().padStart(2, "0")}`;

document.querySelectorAll("tr").forEach(($tr) => {
  if ($tr.dataset.date === currentDate) {
    $tr.classList.add("slot--today");
  }
});
