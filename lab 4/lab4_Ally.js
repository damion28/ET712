/**
 * Damion Ally
 * Feb 11, function
 */
console.log("\n------------ Example 1: function -----------")
// create a function to prompt 'Hello World'
function msg(){
    console.log("Hello World")
}
console.log("\n------------ Example 2: function to print 3, 2, 1 -----------")
function printcount(){
    for(let n=3; n>0; n--){
        console.log(n)
    }
}
console.log("\n------------ Example 3: function with parameter -----------")
// pass a name into a function. The function will prompt the name in all uppercase
function greeting(passname){
    passname = passname.toUpperCase()
    console.log(`Welcome to functions ${passname}`)
}
// function that takes two numbers and prompts the sum of them
function sum(x,y){
    console.log(`${x} + ${y} = ${x+y}`)
}
console.log("\n------------ Example 4: snake eyes -----------")
// function to print 'snake eyes' if a 1 and 1 is passed to the function
function snake_eyes(x,y){
    if(x===1 && y===1){
        console.log("SNAKE EYES")
    }
    else{
        console.log("Not a snake eyes!")
    }
}
// call snake_eyes function
snake_eyes(3,2)
snake_eyes(1,1)

console.log("\n------------ Example 5: function that returns value -----------")
// function that returns the double of the number
function doublenumber(n){
    n *= 2 // n*2
    return n
}
// call function
let number = 5
let dbnum = doublenumber(number)
console.log(`The double of number ${number} is ${dbnum}`)

console.log("\n------------ Example 6: function that returns value -----------")
// function that returns 'true' if a temperature is greater than 75. Otherwise, it returns a 'false' if the temperature is less than or equal to 75
function checktemp(temperature){
    if(temperature>75){
        return true
    }
    else{
        return false
    }    
}

// call function
let t = 100
let temp_result = checktemp(t)
console.log(`Is the temperature greater than 75? ${temp_result}`)


console.log("\n---------------- Example 7: built-in function --------------------")

// built-in function in JS is called a global variable 

// math function
let num_p = Math.PI
console.log(`JS PI value = ${num_p}`)

// round() method returns the nearest ineger
console.log(`rounded up PI = ${Math.round(num_p)}`)

// ceil() method returns the round up of a number
console.log(`ceil method = ${Math.ceil(num_p)}`)

// pow() method returns the value of base to the power of exponent
console.log(`2^3 = ${Math.pow(2,3)}`)

// square root method --> sqrt()
console.log(`square root of 9 = ${Math.sqrt(9)}`)

// random number generator. random() method returns a random number between 0 and 1
console.log(`random number = ${Math.random()}`)

// random number between 1 and 9
let n = 1 + Math.round(Math.random()*8)
console.log(`number between 1 and 9 = ${n}`)


console.log("\n---------------- Example 8: random number --------------------")

// function to randomly generate a number between -5 and 5
function randnumber() {
    let p = -5 + Math.random(Math.random() * 10) // we put 10 because 10 + (-5) is equal to 5.
    return p;
}


console.log("\n---------- Example 9: random number in a list (array) ----------")

// function to randomly pick a color from a list of colors

let colors = ["red", "green", "blue", "megenta", "gray"]
function randomcolor(picked_index){
    let list_size = colors.length       // find the length of the list
    let last_index = list_size - 1      // find the last index of the list
    let random_index = Math.random(Math.random() * last_index)      // randomly pick a number between 0 and the last index
    return colors[random_index]     // return the random picked color
}

console.log(`color picked = ${randomcolor()}`)
