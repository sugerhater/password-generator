// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberNumber = Number(prompt("For a strong password, input the the numbers of number you want in the password: "));
var specialKeyNumber = Number(prompt("How many special keys do you want in the password?"));
var lowerCaseNumber = Number(prompt("How many lower case characters do you want in the password?"));
var upperCaseNumber = Number(prompt("How many UPPER case characters do you want in the password: "));

var numberPart = Math.floor(Math.random()*(Math.pow(10,numberNumber)));
console.log(numberPart);

var specialKeyString = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // length = 31
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = lowerCaseString.toLocaleUpperCase();
console.log(upperCaseString);

console.log(specialKeyString);
console.log(specialKeyString.length);

// function specialKey () {
//     specialKeyPart = " ";
//     // specialKeyTrans = [];
//     for (var i =0; i< specialKeyNumber; i++) {
//         specialKeyTrans= Math.floor(Math.random()*31);
//         specialKeyPart = specialKeyPart + specialKeyString[specialKeyTrans];
//         console.log(specialKeyPart);
//     }
//     console.log(specialKeyPart);
//     return specialKeyPart;
// };
// var  a = specialKey();

function eachPart (numberOfEachPart,stringInput) {
  Part = " ";
  // specialKeyTrans = [];
  for (var i =0; i< numberOfEachPart; i++) {
      trans= Math.floor(Math.random()*stringInput.length);
      Part = Part + stringInput[trans];
      console.log(Part);
  }
  console.log(Part);
  return Part;
};
var specialKeyPart = eachPart (specialKeyNumber, specialKeyString);
var lowerCasePart = eachPart (lowerCaseNumber, lowerCaseString);
var upperCasepart = eachPart (upperCaseNumber, upperCaseString);

console.log(lowerCasePart);
console.log(upperCasepart);







// console.log(specialKeyPart);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
