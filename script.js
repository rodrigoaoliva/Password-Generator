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

if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) { //Condition to check if at least one character set option was chosen

  alert("At least one character type must be selected."); //Gives the user an alert if no character set option was chosen
  return ""; //Returns an empty string of characters
}

//Appens allowed characters based on user choices
if (includeLowercase) {
//Condition that appends lowercase characters to the allowedChars string if users chooses to include lowercase characters
  allowedChars += lowercaseChars; 
} 
if (includeUppercase) {
  //Condition that appends uppercase characters to the allowedChars string if users chooses to include uppercase characters
  allowedChars += uppercaseChars; 
}
if (includeNumeric) {
//Condition that appends numeric characters to the allowedChars string if users chooses to include numeric characters
  allowedChars += numericChars;
}
if (includeSpecial) {
//Condition that appends numeric characters to the allowedChars string if users chooses to include special characters
  allowedChars += specialChars;
}
// Generates the password by selecting random characters from allowed characters
for (var i = 0; i < passwordLength; i++) {
  password += getRandomCharacter(allowedChars);
}

return password //Returns the generated password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();   // Generate a password using the generatePassword function
  var passwordText = document.querySelector("#password"); // Select the HTML element with the ID "password"
  passwordText.value = password;  // Set the generated password as the value of the HTML input element
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);