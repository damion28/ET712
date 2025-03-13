console.log("Damion Ally")
/**
 * example 1
 */
// collect the element
let btnpressme = document.querySelector(".btnpressme")

// add a click event to change the button text and background color when the buton is clicked

btnpressme.addEventListener("click", function(){
    if(btnpressme.textContent == "PRESS ME"){
        btnpressme.textContent = "Button was pressed!"
    }
    else{
        btnpressme.textContent = "PRESS ME"
    }
})