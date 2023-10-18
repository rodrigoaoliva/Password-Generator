// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Character set options*/

var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "123456789";
var specialChars = "!@#$%^&*()_-+=<>?";

function getRandomCharacter(characterSet) {
  var randomIndex = Math.floor(Math.random() * characterSet.length);
  return characterSet.charAt(randomIndex);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
