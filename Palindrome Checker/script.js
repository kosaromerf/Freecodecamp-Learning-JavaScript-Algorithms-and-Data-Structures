const inputElement = document.getElementById("text-input");
const buttonElement = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const checkPalindrome = () => {
  let regex = /[0-9a-z]/i;
  let adjustedInputArray = inputElement.value
    .split("")
    .filter((e) => e.match(regex));
  let plainText = [...adjustedInputArray].join("").toLowerCase();
  let reversePalinText = [...adjustedInputArray]
    .reverse()
    .join("")
    .toLowerCase();

  if (inputElement.value === "") {
    alert("Please input a value");
  } else if (plainText === reversePalinText) {
    resultText.innerHTML = `${inputElement.value} is a palindrome`;
  } else {
    resultText.innerHTML = `${inputElement.value} is not a palindrome`;
  }
};

buttonElement.addEventListener("click", checkPalindrome);
