const input = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanArray = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
const intArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const convertion = (number) => {
  if (!input.value) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (input.value <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (input.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  let i = 0;
  output.innerText = "";

  while (number > 0) {
    let int = Math.floor(number / intArray[i]);
    number = number % intArray[i];

    for (let j = 0; j < int; j++) {
      output.innerText += romanArray[i];
    }
    i++;
  }
};

convert.addEventListener("click", () => {
  convertion(input.value);
});
