// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberNumber = Number(prompt("For a strong password, input the the numbers of number you want in the password: "));
var specialKeyNumber = Number(prompt("How many special keys do you want in the password?"));
// var lowercaseNumber = Number(prompt("How many lower case characters do you want in the password?"));
// var lowercaseNumber = Number(prompt("How many UPPER case characters do you want in the password: "));

var numberPart = Math.floor(Math.random()*(Math.pow(10,numberNumber)));
console.log(numberPart);

var specialKeyString = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // length = 31
console.log(specialKeyString);

function specialKey () {
    specialKeyPart = " ";
    // specialKeyTrans = [];
    for (var i =0; i< specialKeyNumber; i++) {
        specialKeyTrans= Math.floor(Math.random()*31);
        specialKeyPart = specialKeyPart + specialKeyString[specialKeyTrans];
        console.log(specialKeyPart);
    }
    console.log(specialKeyPart);
    return specialKeyPart;
};
var  a = specialKey();

console.log(a);



// console.log(specialKeyPart);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
