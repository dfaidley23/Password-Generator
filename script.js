// Assignment Code
var generateBtn = document.querySelector('#generate');
var characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Write password to the #password input
function generatePassword() {
    var password = '';
    var length = (prompt('How long would you like your password to be? Please choose between 8 - 128 characters.'));
    // a while loop with clauses for the length and an error prompt if the length criteria is not met
    while(length <= 8 || length >= 129) {
        alert('Your password must be between 8 and 128 characters long');
        var length = (prompt('How long would you like your password to be?'));
        } 

    for (var i = 0; i <= length; i++) {
        password += characters.charAt(
        Math.floor(Math.random() * characters.length));
        }
    return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);