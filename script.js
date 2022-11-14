const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let saveElOne = document.getElementById("display-password1")
let saveElTwo = document.getElementById("display-password2")
let btnClick = document.getElementById("btn")

let passwordLength = 12



btnClick.addEventListener('click', function() {
    saveElOne.textContent = generatePassword();
    saveElTwo.textContent = generatePassword();
})

function generatePassword() {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex];
    }

    return password;
     
}











//let btnClick = document.getElementById("btn")

/*btnClick.addEventListener("click", function() {
    for (let i = 0; i< characters.length; i++) {
    }
})

*/

/*let randomIndexOne = Math.floor ( Math.random() * 13 ) 
let randomIndexTwo = Math.floor ( Math.random() * 13 ) 

*/


/*function btnEL() {

    for (let i = 0; i < characters.length; i++) {
    }
    */

/*let passWordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[ randomChar]
}

*/


//passwordOne.textContent = characters[randomIndexOne]
//passwordTwo.textContent = characters[randomIndexTwo]
//let btnClick = document.getElementById("btn")

//btnClick.addEventListener("click", function() {
    
//})


/*let passwordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

const generatedPasswordOne = generateRandomPassword()

console.log("Here is a random password: ", generatedPasswordOne) */

/*
let btnClick = document.getElementById("btn")
let passwordOne = document.getElementById("display-password1")
let passwordTwo = document.getElementById("display-password2")


btnClick.addEventListener("click", function(){
    for (let i = 0; i< characters.length; i++) {
        
    }
passwordOne.textContent = characters[randomIndexOne]
passwordTwo.textContent = characters[randomIndexTwo]
    
} )

let passWordLength = 12
 //function getRandomCharacter() {
   let randomIndexOne = Math.floor ( Math.random() * 13 ) 
  // return characters[randomIndexOne]
// }

// function getRandomCharacters() {
    let randomIndexTwo = Math.floor ( Math.random() * 13 ) 
 //   return characters[randomIndexTwo]
 // } */