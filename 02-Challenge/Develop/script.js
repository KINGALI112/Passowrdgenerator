// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}
//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('lenght');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number:getRandomNumber,
  symbol:getRandomSymbol, 
};
 //Generate Functions
 function getRandomLower() {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }

 function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }
 
 function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }
 function getRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateEl.addEventListener('click', () => {
  const lenght = +lengthEl.value;
  const hasLower = lowercaseEl.checked; 
  const hasUpper = uppercaseEl.checked;
  const hasnumber = numberEl.checked;
  const hasSymbol = symbolsEl.checked;
 
 resultEl.innerText = generatePassword(
  hasLower, 
  hasUpper, 
  hasnumber,
  hasSymbol, 
  length
  ); 
});
clipboardEl;addEventListener('click', ()=> {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if(!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('password copied to clipboard!');
});

//Generate password funtion
function generatePassword(lower, upper, number, symbol, length) {
  
  //  Filter out unchecked types
  

  let generatePassword = '';

  const typesCount = lower + upper + number + symbol;

 

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]
  );

  
if(typesCount === 0){
  return '';
}

for(let i = 0; i < length; i += typesCount) {
  typesArr.forEach(type => {
  const funcName = Object.keys(type) [0];
 
   generatePassword += randomFunc[funcName]();
  });
}


}
