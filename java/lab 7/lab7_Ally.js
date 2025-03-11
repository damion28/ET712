console.log("Damion Ally")
console.log("\n---- examlpe 1 ----")
// select element by class name "description"
let desc = document.querySelector(".description")
console.log(desc)
// select element by id name "title"
let titleNode = document.querySelector("#title")
console.log(titleNode)
// select element/s by tag name, "p"
let par = document.querySelectorAll("p")
console.log(par)
// select all elements with class name "methods"
let methods = document.querySelectorAll(".methods")
console.log(methods)
// loop through each element in a node list
console.log("\n---- example 2 loop through each element in a list list ----")
for(let n = 0; n<methods.length; n++){
    console.log(methods[n])
}

console.log("\n---- Example 3: CLICK EVENT ----")
// select the button
let btn = document.querySelector(".btnclick")
// add an event (click) to btn
btn.addEventListener("click", function(){
    alert("BTN WAS CLICKED")
})

console.log("\n---- Example 4: click event to change text content ----")
// select the elements, 'btnmsg', 'msg'
let btnmsg = document.querySelector(".btnmsg")
let msg = document.querySelector(".msg")
// add an event to 'msg' that changes the text load to "Damion Ally"
btnmsg.addEventListener("click", function(){
    msg.innerHTML = "Good afternoon <b> Damion Ally </b>"
})

console.log("\n---- Example 5: Changing shapes mini-app ----")
// select elements
let shape = document.querySelector(".shape")
let btncircle = document.querySelector(".btncircle")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")

// add an event to each button
btncircle.addEventListener("click", function(){
    shape.className = "circle"
})
btnsquare.addEventListener("click", function(){
    shape.className = "square"
})
btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
})

/**
 * Tuesday, March 11, traditional events
 */
//onmouseout event
// collect the element
let event6 = document.querySelector(".event6")
// add a mouseout event
event6.onmouseout = function(){
    alert("MOUSE OUT - Example 6")
}

// example 7
// inline event
function openalert(){
    alert("CLICK EVENT - EXAMPLE 7")
}

// example 8 mouseover event
// change the background color of a div when the mouse hover the element
// collect element
let divexample8 = document.querySelector(".divexample8")
divexample8.onmouseout = function(){
    let randcolor = Math.floor(Math.random()*255)
    divexample8.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}`
}

// example 9: keyboard event
let inputex9 = document.querySelector(".inputex9")
let ex9paragraph = document.querySelector(".ex9paragraph")

inputex9.onkeydown = function(event){
    ex9paragraph.innerHTML = `key ${event.key} was pressed`
}

/**
 * LAB EXERCISE
 */
// EXERCISE
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
// add a mouseout event to change the text content to "STUDENT'S FULL NAME"


// search for the second p with class ps2
// add a click event to the ps2 to change the font-size to 25px  and color to olive when is clicked


// search for the first div with class divs2
// add a click event to change the background color to indigo


// search for the second div with class divs2
// add a keydown event to change the width of divs2 to 300px