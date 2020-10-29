// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberNumber = Number(prompt("For a strong password, input the the numbers of number you want in the password: "));
var specialKeyNumber = Number(prompt("How many special keys do you want in the password?"));
var lowerCaseNumber = Number(prompt("How many lower case characters do you want in the password?"));
var upperCaseNumber = Number(prompt("How many UPPER case characters do you want in the password: "));

var specialKeyString = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // length = 31
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = lowerCaseString.toLocaleUpperCase();
console.log(upperCaseString);

var numberPart = Math.floor(Math.random()*(Math.pow(10,numberNumber)));
console.log(numberPart);

// console.log(specialKeyString);
// console.log(specialKeyString.length);

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
  Part = "";
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
var upperCasePart = eachPart (upperCaseNumber, upperCaseString);

console.log(lowerCasePart);
console.log(upperCasePart);

var totalNumber =numberNumber + specialKeyNumber + lowerCaseNumber + upperCaseNumber;
// console.log(totalNumber);
// var totalNumber =totalNumber.trim();

function generatePassword() {
  
  if (totalNumber >= 8 && totalNumber<152 ) {
    password = (upperCasePart + lowerCasePart + specialKeyPart + numberPart).trim();
    console.log(password);
    console.log(upperCasePart);
    return password
  }
  else { alert("Please put set a password that has at least 8 and less than 152 characters!")

  }
  };

// console.log(specialKeyPart);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
