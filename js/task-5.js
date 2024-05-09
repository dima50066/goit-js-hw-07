function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBgColor = document.querySelector(".change-color");
changeBgColor.addEventListener("click", changeColor);
const widget = document.querySelector(".widget");
function changeColor() {
  const color = getRandomHexColor();
  widget.style.backgroundColor = color;
  document.querySelector(".color").textContent = color;
}
