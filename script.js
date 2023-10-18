// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Character set options*/

var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "123456789";
var specialChars = "!@#$%^&*()_-+=<>?";

// Function to generate a random character from a given character set
function getRandomCharacter(characterSet) {
  var randomIndex = Math.floor(Math.random() * characterSet.length);
  return characterSet.charAt(randomIndex);
}

// Function to generate a password based on user criteria
function generatePassword() {
  var password = "";
  var allowedChars = "";

  var passwordLength = prompt("Enter the password length (between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength); //converts strings to integers

  if (passwordLength < 8) {
  alert ("Please enter a password with more than 7 characters");
  return ""
  }

  if (passwordLength > 128) {
    alert ("Please enter a password with less than 129 characters");
    return ""
  }
}

var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

//Asks user to confirm at least one character set option to generate a password
if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert("At least one character type must be selected.");
  return "";
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
