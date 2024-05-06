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
        if (currentIndex < totalSlides - 1) {
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