const title = document.querySelector('h2');
const list = document.querySelector("ul");

title.addEventListener("click", () => {
  list.hidden = !list.hidden
  arrow.style.transform = list.hidden 
  ? "rotate(90deg)"
  : "rotate"
})