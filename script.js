var generateBtn = document.querySelector("#generate");
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!#$%^&*()+-<>,.?/|}{~`";
var numbers = "0123456789";

function generatePassword() {
  var password = "";
  var possible = "";
  var passwordLength = prompt("How many characters do you want in your  password, it must be more than 12 but less than 128.");

  var hasNumbers = confirm("Do you want numbers in your password?");

  var hasLowerCases = confirm("Do you want lowercases in your password?");

  var hasUpperCases = confirm("Do you want uppercases in your password?");

  var hasSpecialChars = confirm("Do you want special characters in your password?");


  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("The number must be between 10 and 50, please re-enter.");
  }

  for (var i = 0; i < passwordLength; i++) {
    if (hasLowerCases) {
      password = password + randomize(lowerCases);
    }
    if (hasUpperCases) {
      password = password + randomize(upperCases);
    }
    if (hasSpecialChars) {
      password = password + randomize(specialChars);
    }
    if (hasNumbers) {
      password = password + randomize(numbers);
    }
}
  return password.substring(0, passwordLength)

}
function randomize (letters) {
var num = Math.floor(Math.random() * letters.length);
var char = letters[num]
return char
}
function createPassword() {
  var password = generatePassword();
  var pwTextArea = document.getElementById("password");
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
    return
  }
}

generateBtn.addEventListener("click", createPassword);
var pwTextArea = document.getElementById("password");
var passwordText = document.querySelector("#password");





