const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword() {
    const passwordLength = document.getElementById("password-length").value;
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");

    let generatedPassword1 = "";
    let generatedPassword2 = "";

    for (let i = 0; i < passwordLength; i++) {
        generatedPassword1 += getRandomCharacter();
        generatedPassword2 += getRandomCharacter();
    }

    password1.textContent = generatedPassword1;
    password2.textContent = generatedPassword2;
}