const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = input.value;

  if (amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  destroyBoxes();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
    boxes.appendChild(box);
  }

  input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
