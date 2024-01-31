const passwordBox = document.getElementById("password");
const copy = document.querySelector(".copy")
const button = document.querySelector("button");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const characters = "#@$567*(){[]}?/-+=_~`"

const allChars = uppercase + lowercase + numbers + characters;

function createPassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += characters[Math.floor(Math.random()*characters.length)];

    while(length > password.length){
    password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

button.addEventListener("click", createPassword)


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

copy.addEventListener("click", copyPassword)