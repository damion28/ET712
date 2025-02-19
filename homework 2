/*
Damion Ally
Homework 2 - functions, loops, and conditional statement
*/

console.log("\n------------ Exercise 1: name_counting() Function -----------");

let names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"];

function name_counting(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < 5) {
            count++;
        }
    }
    return count;
}

let result = name_counting(names);
console.log(`Number of names with less than 5 characters: ${result}`);

console.log("\n------------ Exercise 2: checkNum() Function -----------");

function checkNum() {
    let number;

    while (true) {
        number = prompt("Enter a number:");

        number = Number(number);

        if (!isNaN(number)) {
            break;
        }
        alert("Invalid input. Please enter a valid number.");
    }

    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let isEven = checkNum();
console.log(`Is the number even? ${isEven}`);
