/*

Homework 1: control flow and loops

Damion Ally

*/

console.log("\n------ Program 1: Conditional Statement -----");

let user = prompt("Enter a number: ")

if(user === null){
    
    console.log("Null and void!")

}else if(user === ""){

    console.log("Your answer was blank!")

}else{
    
    let num = Number(user)
    
    if(!isNaN(num)){
       
        if(num > 0){
        
            console.log("Think positively!")
      
        }else if (num < 0){
    
            console.log("Never have negative balance!")
    
        }else{
    
            console.log("Yin and Yang!")
        }
    }
}




console.log("------------ Program 2: for loop and nested conditional statement --------------")

let numbers = []

for(let i = 0; i < 10; i++){
    let userInput = prompt(`Enter number ${i + 1}:`)

    if(userInput === null || userInput === ""){
        console.log("Invalid input! Please enter a number.")
        i--
        continue
    }

    let num = Number(userInput)

    if(isNaN(num)){
        console.log("That's not a number! Try again.")
        i--
    }else{
        numbers[numbers.length] = num
    }
}

let count3 = 0
let count5 = 0
let count7 = 0

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 3 === 0) count3++
    if(numbers[i] % 5 === 0) count5++
    if(numbers[i] % 7 === 0) count7++
}

console.log(`${count3} numbers are multiple of 3`)
console.log(`${count5} numbers are multiple of 5`)
console.log(`${count7} numbers are multiple of 7`)
