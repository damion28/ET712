console.log("Damion Ally")

// EXERCISE 1

const myform = document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")
const btnsubmit = document.querySelector(".btnsubmit")
const errormsg = document.querySelector(".errormsg")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const usernameError = document.querySelector("#username-error")
const emailError = document.querySelector("#email-error")
const passwordError = document.querySelector("#password-error")
const passwordInstructions = document.querySelector(".password-instructions")

function isValidEmail(email) {
    return email.indexOf('@') !== -1 && email.indexOf('.') !== -1;
}

function isValidPassword(password) {
    var hasSpecialChar = password.indexOf('#') !== -1 || password.indexOf('$') !== -1 || password.indexOf('%') !== -1;
    return password.length >= 8 && hasSpecialChar;
}

window.addEventListener("load", function(){
    btnsubmit.disabled = true
    passwordInstructions.style.display = "block"; 
})

myform.addEventListener("submit", function(event){
    event.preventDefault()

    let usernamevalue = username.value.trim()
    let emailvalue = email.value.trim()
    let passwordvalue = password.value.trim()

    let formValid = true;

    if(usernamevalue === "") {
        usernameError.style.display = "block";
        formValid = false;
    } else {
        usernameError.style.display = "none";
    }

    if(!isValidEmail(emailvalue)) {
        emailError.style.display = "block";
        formValid = false;
    } else {
        emailError.style.display = "none";
    }

    if(!isValidPassword(passwordvalue)) {
        passwordError.style.display = "block";
        formValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if(formValid) {
        greetuser.innerHTML = usernamevalue
        greeting.style.display = "block"

        username.value = ""
        email.value = ""
        password.value = ""
    } else {
        return;
    }
})

myform.addEventListener("input", function() {
    let passwordvalue = password.value.trim()
    
    if (isValidPassword(passwordvalue)) {
        btnsubmit.disabled = false
        passwordError.style.display = "none"; 
    } else {
        btnsubmit.disabled = true
        passwordError.style.display = "block";
    }
})
