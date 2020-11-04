var generateBtn = document.querySelector("#generate");
// Get password information from user. 
var numberNumber;
var specialKeyNumber;
var lowerCaseNumber;
var upperCaseNumber;
// Create strings for ecah part. 
var specialKeyString;
var lowerCaseString;
var upperCaseString;
var numberPart;
// console.log(numberPart);// debuging.
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
// Writed a function only for specialkey, then changed into a function for all parts.
function eachPart(numberOfEachPart, stringInput) {
  Part = "";
  for (var i = 0; i < numberOfEachPart; i++) {
    trans = Math.floor(Math.random() * stringInput.length);
    Part = Part + stringInput[trans];
    console.log(Part);
  }
  console.log(Part);
  return Part;
};
// console.log(lowerCasePart);//debugging
// console.log(upperCasePart);//debugging
// console.log(totalNumber);
// var totalNumber =totalNumber.trim();
function promptUser() {
  numberNumber = Number(prompt("For a strong password, input the the numbers of number you want in the password: "));
  specialKeyNumber = Number(prompt("How many special keys do you want in the password?"));
  lowerCaseNumber = Number(prompt("How many lower case characters do you want in the password?"));
  upperCaseNumber = Number(prompt("How many UPPER case characters do you want in the password: "));
  specialKeyString = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // length = 31
  lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  upperCaseString = lowerCaseString.toLocaleUpperCase();
  numberPart = Math.floor(Math.random() * (Math.pow(10, numberNumber)));
}
function generatePassword() {
  promptUser();
  var specialKeyPart = eachPart(specialKeyNumber, specialKeyString);
  var lowerCasePart = eachPart(lowerCaseNumber, lowerCaseString);
  var upperCasePart = eachPart(upperCaseNumber, upperCaseString);
  var totalNumber = numberNumber + specialKeyNumber + lowerCaseNumber + upperCaseNumber;
  if (totalNumber >= 8 && totalNumber < 152) {
    password = (upperCasePart + lowerCasePart + specialKeyPart + numberPart).trim(); // use trim to make sure no space inside. 
    console.log(password);     //debuging
    return password
  }
  else {
    alert("Please put set a password that has at least 8 and less than 152 characters!")
  }
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// if customer chose 12
// numberOfChoices 12/4
// if (shouldHaveSpecChars) {
//   password = password + randomStuff(specialKeyString, 3)
// }