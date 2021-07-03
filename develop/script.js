
// Assignment Code
var generateBtn = document.querySelector("#generate");
var setOfChar = "abcdefghijklmnopqrstuvwxyz"
var setOfSpecial = "!@#$%^&*-_=+<>?/.,;:'"
var setOfNumber = "1234567890"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  //length of password
var pasLength = parseInt(prompt("How long would you like your password to be"));
if(isNaN(pasLength)) {
  console.log("fail");
  alert ("please enter in a number");
  generatePassword()
  } 
  else if (pasLength > 128 || pasLength < 8) {    
    console.log("# to high");
    alert ("Your number should be minnimun of 8 and max of 128");
    generatePassword()
  }
//length end 


var lowerCase = confirm("would you like lower case letters?")
console.log(lowerCase)

var upperCase = confirm("Would you like upper case letters?")
console.log(upperCase)

var numbers = confirm("Would you like numbers?")
console.log (numbers)

var special = confirm("Would you like Special characters?")
console.log(special)

var randomDataSet = [ ];

//lowercase starts
if(lowerCase == true){
    for (let i = 0; i < pasLength; i++) {
    
      min = 0
      max = setOfChar.length - 1

      randomInt = Math.floor(Math.random()*(max-min+1)+min);
      randomChar = setOfChar.charAt(randomInt);
      console.log(randomChar);
      randomDataSet.push(randomChar)
      console.log(randomDataSet)
    }
  }
//lowercase ends

//uppercase starts
if (upperCase == true) {
  for (let i = 0; i < pasLength; i++) {  
  min = 0
    max = setOfChar.length - 1

    randomInt = Math.floor(Math.random()*(max-min+1)+min);
    randomChar = setOfChar.toLocaleUpperCase().charAt(randomInt);
    
    console.log(randomChar);
    randomDataSet.push(randomChar)
    console.log(randomDataSet)
  }
}

//uppercase ends

//numbers start
if  (numbers == true) {
  for (let i = 0; i < pasLength; i++) {
    
    min = 0
    max = setOfNumber.length - 1

    randomInt = Math.floor(Math.random()*(max-min+1)+min);
    randomChar = setOfNumber.charAt(randomInt);
    console.log(randomChar);
    randomDataSet.push(randomChar)
    console.log(randomDataSet)
  }  
}

//number ends

//special starts
if (special == true) {
  for (let i = 0; i < pasLength; i++) {
    
    min = 0
    max = setOfSpecial.length - 1

    randomInt = Math.floor(Math.random()*(max-min+1)+min);
    randomChar = setOfSpecial.charAt(randomInt);
    console.log(randomChar);
    randomDataSet.push(randomChar)
    console.log(randomDataSet)
  }
}

//special ends

randomDataSet = randomDataSet.join("")
  console.log(randomDataSet)

var passwordOut = [ ]

for (let i = 0; i < pasLength; i++) {
    
  min = 0
  max = randomDataSet.length - 1

  randomInt = Math.floor(Math.random()*(max-min+1)+min);
  randomChar = randomDataSet.charAt(randomInt);
  console.log(randomChar);
  passwordOut.push(randomChar)
  console.log(randomDataSet)
}

  passwordOut = passwordOut.join("")
  console.log(passwordOut)

  return passwordOut
}// end generate password definition 

