// Assignment Code
var generateBtn = document.querySelector('#generate');
var numbers = '0123456789';
var special = '!@#$%^&*()';
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var possChar = '';

// Write password to the #password input
function generatePassword() {
    var password = '';
    var length = (prompt('How long would you like your password to be? Please choose between 8 - 128 characters.'));
    // a while loop with clauses for the length and an error prompt if the length criteria is not met
    while (length < 8 || length > 128) {
        alert('Your password must be between 8 and 128 characters long');
        length = (prompt('How long would you like your password to be?'));
    }

    if (document.getElementById('upper').checked){
        possChar += alphabet.toUpperCase();
    }

    if (document.getElementById('lower').checked){
        possChar += alphabet;
    }

    if (document.getElementById('special').checked){
        possChar += special;
    }

    if (document.getElementById('numbers').checked){
        possChar += numbers;
    }


    for (var i = 0; i < length; i++) {
        password += possChar.charAt(
            Math.floor(Math.random() * possChar.length));
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


document.querySelector("#copy").addEventListener("click", function() {
    document.querySelector("#password").select()
    document.execCommand("copy")
})