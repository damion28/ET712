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

