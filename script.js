// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Character set options*/

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    return "";
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
if (includeLowercase) {
  allowedChars += lowercaseChars;
}
if (includeUppercase) {
  allowedChars += uppercaseChars;
}
if (includeNumeric) {
  allowedChars += numericChars;
}
if (includeSpecial) {
  allowedChars += specialChars;
}
for (var i = 0; i < passwordLength; i++) {
  password += getRandomCharacter(allowedChars);
}

return password

}