const display = document.getElementById("display");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const multipleButton = document.getElementById("multipleButton");
const divideButton = document.getElementById("divideButton");

let number = 0;
plusButton.addEventListener("click", function() {
  number++;
  display.textContent = number;
});

minusButton.addEventListener("click", function() {
  number--;
  display.textContent = number;
});

multipleButton.addEventListener("click", function() {
  number = number * 2;
  display.textContent = number;
});
divideButton.addEventListener("click", function() {
  number = number / 2;
  display.textContent = number;
});
