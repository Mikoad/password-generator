const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!@#$%^&*_+-=~'\"`|/:;,.?";
const rangeValue = document.getElementById("password-length");
const lengthDisplay = document.getElementById("length-display");
const passwordOutput = document.getElementById("password-output");
lengthDisplay.textContent = rangeValue.value;
const generatePassword = () => {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);
  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;
};
rangeValue.addEventListener("input", () => {
  lengthDisplay.textContent = rangeValue.value;
});
generateButton.addEventListener("click", generatePassword);
