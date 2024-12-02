const imagini = [
    "img/CPU.png",
    "img/Disk.png",
    "img/Memory.png",
    "img/Porturi.png",
    "img/Procese.png",
    "img/Servicii.png"
]

let currentSlide = 0;
let interval = null;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
}

function startSlideshow() {
    const button = document.getElementById("startButton");
    if (interval) {
        clearInterval(interval);
        interval = null;
        button.textContent = "Start prezentare";
    } else {
        interval = setInterval(showSlides, 3000); // Schimbă la fiecare 3 secunde
        showSlides(); // Arată primul slide imediat
        button.textContent = "Oprește prezentarea";
    }
}

document.getElementById("startButton").addEventListener("click", startSlideshow);

console.log("Script merge!")

document.addEventListener("DOMContentLoaded", () => {
    showSlides(); // Afișează primul slide
});


/*const frecventa = parseInt(prompt("Introdu aici la cate secunde se schimba poza: "));


var i=0;
var interval = null;

function startPrezentare()
{
    if (interval)
    {
        return;
    }
    interval = setInterval(() => {
        i = (i + 1) % imagini.length;
        document.getElementById("slide"), src = imagini[i];
    }, frecventa);

}

document.getElementById("startButton").addEventListener("click", startPrezentare);
*/
