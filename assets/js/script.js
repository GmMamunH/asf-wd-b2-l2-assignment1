const menu = document.querySelector("#menu");
const mainMenu = document.querySelector("#mainMenu");

menu.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});
