// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberNumber = Number(prompt("For a strong password, input the the numbers of number you want in the password :"))



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
