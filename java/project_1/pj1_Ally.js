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
