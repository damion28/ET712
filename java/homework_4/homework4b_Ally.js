let currentIndex = 0;
const cards = document.querySelector(".cards");
const cardWidth = document.querySelector(".card").offsetWidth + 20;

document.querySelector(".left").addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = 3;
    }
    updateGallery();
});

document.querySelector(".right").addEventListener("click", function () {
    if (currentIndex < 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateGallery();
});

function updateGallery() {
    cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
