// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();

    // Any shared JavaScript functionality
    console.log('elezesHalasztelek loaded');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const kepek = [
    "images/elezes2.JPG",
    "images/fureszCsak.png",
    "images/csigafuro.JPG",
    "images/lancCsak.png"
];

let index = 0;
const kepElem = document.getElementById("valtozoKep");

function kovetkezoKep() {
    // Elhalványítjuk a képet
    kepElem.classList.add("fade-out");

    setTimeout(() => {
        // Következő kép beállítása
        index = (index + 1) % kepek.length;
        kepElem.src = kepek[index];

        // Új kép megjelenítése
        kepElem.classList.remove("fade-out");
    }, 500); // Fél másodperc halványodás után vált
}

// 1,5 másodpercenként képváltás
setInterval(kovetkezoKep, 5000);


