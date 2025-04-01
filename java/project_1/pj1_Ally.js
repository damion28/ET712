let btnpressmeColors = document.querySelector(".btncolors");

btnpressmeColors.addEventListener("click", function(e) {
    if (e.target.textContent === "View Colors") {
        window.location.href = "https://www.tinytap.com/activities/g2ph4/play/fantastic-color-game";
    }
});

let btnpressmeNumbers = document.querySelector(".btnnumbers");

btnpressmeNumbers.addEventListener("click", function(e) {
    if (e.target.textContent === "View Numbers") {
        window.location.href = "https://www.topmarks.co.uk/learning-to-count/teddy-numbers";
    }
});

let btnpressmeShapes = document.querySelector(".btnshapes");

btnpressmeShapes.addEventListener("click", function(e) {
    if (e.target.textContent === "View Shapes") {
        window.location.href = "https://www.topmarks.co.uk/symmetry/symmetry-matching";
    }
});

function showRandomColor() {
    const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.getElementById("colorDisplay").textContent = "Color: " + randomColor;
    
    const colorBox = document.createElement("div");
    colorBox.style.width = "100px";
    colorBox.style.height = "100px";
    colorBox.style.backgroundColor = randomColor.toLowerCase();
    document.getElementById("colorDisplay").appendChild(colorBox);

    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    
    yesButton.style.display = "inline-block";
    noButton.style.display = "inline-block";
    
    document.getElementById("feedback").textContent = "";
}

function checkGuess(isCorrect) {
    const colorName = document.getElementById("colorDisplay").textContent.split(": ")[1].toLowerCase();
    const colorBox = document.querySelector("#colorDisplay div");
    
    const feedback = document.getElementById("feedback");
    
    // Check if the guess is correct
    if (isCorrect && colorBox.style.backgroundColor === colorName.toLowerCase()) {
        feedback.textContent = "Correct! Well done!";
        feedback.style.color = "green";
    } else if (!isCorrect && colorBox.style.backgroundColor !== colorName.toLowerCase()) {
        feedback.textContent = "Correct! It isn't " + colorName + ".";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Oops! Try again.";
        feedback.style.color = "red";
    }

    document.getElementById("yesButton").style.display = "none";
    document.getElementById("noButton").style.display = "none";
}


function showShape(shape) {
    const shapeDisplay = document.getElementById('shapeDisplay');
    let shapeImage = '';

    if (shape === 'circle') {
        shapeImage = '<img src="images/circle.png" alt="Circle" />';
    } else if (shape === 'square') {
        shapeImage = '<img src="images/square.png" alt="Square" />';
    } else if (shape === 'triangle') {
        shapeImage = '<img src="images/triangle.png" alt="Triangle" />';
    }

    shapeDisplay.innerHTML = shapeImage;
}

let topcontainer = document.querySelector(".topcontainer")

window.addEventListener("scroll", function(){
    let pxTop = window.scrollY
    console.log(pxTop)
    if(pxTop>80){
        topcontainer.style.display = "block"
    }
})