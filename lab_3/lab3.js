/**
 * Damion Ally
 * Feb 4, Loops
 */
console.log("Damion Ally")
console.log("\n-------- Example 1: for loops -------------")
// use a for loop to print from 0 to 4 --> 0 1 2 3 4
for(let n = 0; n<=4 ; n++){
    console.log(`counting = ${n}`)
}

console.log("\n-------- Example 2: for loops with conditional statement -------------")
// collect the initial value from the user
// print all even numbers between the initial value and 20
let initialvalue = parseInt(prompt("Enter a number: "))
for(initialvalue; initialvalue<=20; initialvalue++){
    if(initialvalue%2==0){
        console.log(initialvalue)  // only print even numbers
    }
}

console.log("\n-------- Example 3: for loops as decrement counter -------------")
// for loop to print from 9 to 0 in a step of 3 --> 9 6 3 0
for(let n = 9; n>=0; n-=3){
    console.log(n)
}

console.log("\n-------- Example 4: for loops in an array(list) -------------")
// set up a list of animals
let animals = ["fish","turtle","dog"]
for(let index = 0; index<animals.length; index++){
    console.log(animals[index])
}
// set up a list of numbers
// count how many negative numbers are in the list
let numbers = [5, -3, 10, -9, 2]
let counternegative = 0;
for(let index = 0; index<numbers.length; index++){
    if(numbers[index]<0){
        counternegative++
    }
}
console.log(`There is ${counternegative} in list number/s in list 'numbers'`)

console.log("\n-------- Example 5: for loops in a string -------------")
let username = "Peter Pan"
let counter_e = 0
for(let index = 0; index<username.length; index++){
    // console.log(username[index])
    // find the total number of letter 'e' in username
    if(username[index]==='e'){
        counter_e++
    }
}
console.log(`There is/are ${counter_e} letter e in 'username'`)

console.log("\n-------- EXERCISE FOR LOOP -------------")

let num = [-3, 10, 0, 8, -9, 5, -2, 8, 6, -1]
let negative = 0
let positive = 0
// use for loop to check, that all negative numbers and positive number
for(let index = 0; index<num.length; index++){
    if(num[index]<0){
        negative+=num[index]
    }

    else if(num[index]>=0){
        positive+=num[index]
    }
    
}

console.log(`the sum of negative numbers is ${negative}`)
console.log(`the sum of positive numbers is ${positive}`)


console.log("\n-------- Example 6: while loop as a counter -------------")

// use a while loop to display number from 0 to 4 --> 0 1 2 3 4

let y = 0;

while(y<=4){
    console.log(y)
    y++
}

console.log("\n-------- Example 7: while loop application -------------")
// using while loop to check if the user matches the secret number

const SECRET = 8

// collect a number from the user

let usernumber = parseInt(prompt("Enter a number: "))
let guesscounter = 0;

// run a while to recollect the user number if the number doesn't match the secret number

while(usernumber !== SECRET){
    guesscounter++
    usernumber = parseInt(prompt("Wrong guess! Enter a number: "))
}
console.log(`${usernumber} is right! Total attempts ${guesscounter}`)


console.log("\n-------- Example 8: break in a while loop -------------")
// create an application to sum all even numbers. The app continuosly collect a positive number and stop if a negative number is entered

let sumeven = 0;
let collectnumber;

while(true){
    collectnumber = parseInt(prompt("Enter a positive number: "))
    if(collectnumber<0){
        break
    }
    else{
        if(collectnumber%2===0){
            sumeven += collectnumber
        }
    }
}
console.log(`The sum of all even number is ${sumeven}`)

console.log("\n-------- Example 9: continue in a for loop -------------")
// print number from -5 to 5 --> -5 -4 -3 -2 -1 0 1 2 3 4 5

for(let n = -5; n<6 ; n++){
    if(n%2===0){
        continue
    }
    console.log(n)
}

console.log("\n-------- EXERCISE B -------------")

const password = 1285
let attemptcounter = 0;
let usr;

while(attemptcounter < 3){
    usr = parseInt(prompt("Enter your pin: "))
    if(usr === password){
        console.log("Your pin is correct!")
        break
    }
    else{
        attemptcounter++
    }
    if(attemptcounter < 3){
<<<<<<< HEAD
        usr = parseInt(prompt("Try again. Enter your pin: "))
=======
        console.log("Incorrect! Try again")
>>>>>>> 3c84380e5e9d1eff34505697181d23f348e86036
    }
}    
if(attemptcounter===3){
    console.log("Your account is locked!")
<<<<<<< HEAD
}
=======
}
>>>>>>> 3c84380e5e9d1eff34505697181d23f348e86036
