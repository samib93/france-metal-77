document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const carouselInner = carousel.querySelector(".carousel-inner");
    const prevBtn = carousel.querySelector(".prev-btn");
    const nextBtn = carousel.querySelector(".next-btn");

    let currentIndex = 0;
    const slides = carouselInner.querySelectorAll("img");
    const totalSlides = slides.length;

    // Fonction pour déplacer le carousel à l'image suivante
    function nextSlide() {
        if (currentIndex < totalSlides - 4) { // 4 étant le nombre d'images à afficher
            currentIndex++;
            updateCarousel();
        }
    }

    // Fonction pour déplacer le carousel à l'image précédente
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    // Met à jour la position du carousel en fonction de l'index actuel
    function updateCarousel() {
        const slideWidth = slides[currentIndex].offsetWidth;
        carouselInner.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

        // Gestion de l'état des boutons de navigation
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalSlides - 5; // 4 étant le nombre d'images à afficher
    }

    // Écouteurs d'événements pour les boutons de navigation
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Supprimer l'animation automatique du carousel
    carouselInner.style.animation = "none";
});

function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const speed = 1800; 
        const increment = target / speed;

        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.textContent = Math.ceil(count);
                setTimeout(updateCount, 1);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    });
}

document.addEventListener('DOMContentLoaded', animateCounters);


window.addEventListener('scroll', function() {
    // Calculer la progression de la page
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight) * 100;
    
    // Mettre à jour la largeur du HR en fonction de la progression de la page
    document.getElementById('progress-bar').style.width = progress + '%';
});


const header = document.getElementById('header');

// Ajoutez un écouteur d'événements de défilement à la fenêtre
window.addEventListener('scroll', function() {
    // Vérifiez si la position de défilement est supérieure à 0
    if (window.scrollY > 0) {
        // Ajoutez une classe pour changer la couleur et la largeur de la nav
        header.classList.add('scrolled');
    } else {
        // Supprimez la classe si la position de défilement est en haut de la page
        header.classList.remove('scrolled');
    }
});

