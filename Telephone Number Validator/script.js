const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

let regex = /^1?\s?(?:\(\d{3}\)|\d{3})(?:[\s-])?\d{3}(?:[\s-])?\d{4}$/;

const checkNumber = () => {
  if (input.value === "") {
    alert("Please provide a phone number");
    return;
  }
  if (regex.test(input.value)) {
    output.innerText = `Valid US number: ${input.value}`;
    return;
  }
  output.innerText = `Invalid US number: ${input.value}`;
  return;
};

const clearNumber = () => {
  output.innerText = "";
  input.value = "";
};

check.addEventListener("click", checkNumber);
clear.addEventListener("click", clearNumber);
