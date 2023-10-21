// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Character set options*/

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"; // Defines lowercase characters
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Defines uppercase characters
var numericChars = "123456789"; //Defines numeric characters
var specialChars = "!@#$%^&*()_-+=<>?"; //Define special characters

// Function to generate a random character from a given character set
function getRandomCharacter(characterSet) { 
  var randomIndex = Math.floor(Math.random() * characterSet.length); // Generates a random index within the range of the character set
  return characterSet.charAt(randomIndex); //Returns the random character
}

// Function to generate a password based on user criteria
function generatePassword() {
  var password = ""; //Defines an empty starting value for the password
  var allowedChars = ""; //Defines an empty starting string of allowed characters

  var passwordLength = prompt("Enter the password length (between 8 and 128 characters):"); //Prompt for user to select password length
  passwordLength = parseInt(passwordLength); //Converts strings to integers

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {  //Condition to check if user selected a valid password length
    alert("Please enter a valid password length."); //Gives the user an alert if password length is invalid
    return ""; //Returns an empty password length
  }

var includeLowercase = confirm("Include lowercase characters?"); //Confirmation prompt asking the user to include lowercase characters
var includeUppercase = confirm("Include uppercase characters?"); //Confirmation prompt asking the user to include uppercase characters
var includeNumeric = confirm("Include numeric characters?"); //Confirmation prompt asking the user to include numeric characters
var includeSpecial = confirm("Include special characters?"); //Confirmation prompt asking the user to include special characters

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);