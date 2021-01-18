// Constant values declaration
const upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerChars = "qwertyuiopasdfghjklzxcvbnm";
const numberChars = "1234567890";
const symbolChars = "!@#$%^&*(){}[]=<>/,.";

//Testing if entries comply with criteria Loop will start if one condition evaluates to true
var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128){
  length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
}
// Variable to store boolean regarding the inclusion of uppercase letters
var uppers = confirm("Would you like to use uppercase letters?");
// Variable to store boolean regarding the inclusion of lowercase letters
var lowers = confirm("Would you like to use lowercase letters?");
// Variable to store boolean regarding the inclusion of numbers characters
var numbers = confirm("Would you like to use numbers?");
// Variable to store boolean regarding the inclusion of special characters
var symbols = confirm("Would you like to use special characters?");

// Variable to store boolean regarding the inclusion of numbers,special,uppercase,lowercase, characters
while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

// Add event listener to execute writePassword when page is fully loaded 
window.addEventListener('load', function() {
  writePassword();
});

//fonction to store object password into password variable, i use randojs.com to have a simple and easy randomness
//Go to randojs.com to learn more
function writePassword() {
  var password = "";
  var allowed = {};

  if (uppers) password += rando(allowed.uppers = upperChars  );
  if (lowers) password += rando(allowed.lowers = lowerChars );
  if (numbers) password += rando(allowed.numbers = numberChars);
  if (symbols) password += rando(allowed.symbols = symbolChars );

  for (var i = password.length; i < length; i++){
    password += rando(rando(allowed).value);
  }

  // Write password to the #password input
  document.getElementById("password").value = randoSequence(password).join("");
}

