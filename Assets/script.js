// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberNumber = Number(prompt("For a strong password, input the the numbers of number you want in the password: "));
var specialkeyNumber = Number(prompt("How many special keys do you want in the password?"));
var lowercaseNumber = Number(prompt("How many lower case characters do you want in the password?"));
var lowercaseNumber = Number(prompt("How many UPPER case characters do you want in the password: "));

var numberPart = Math.floor(Math.random()*(Math.pow(10,numberNumber)));
console.log(numberPart);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
