document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const carouselInner = carousel.querySelector(".carousel-inner");
    const prevBtn = carousel.querySelector(".prev-btn");
    const nextBtn = carousel.querySelector(".next-btn");

    let currentIndex = 0;
    const slides = carouselInner.querySelectorAll("img");
    const totalSlides = slides.length;

    // Fonction pour obtenir le nombre d'images visibles en fonction de la largeur de l'écran
    function getVisibleSlides() {
        if (window.innerWidth <= 768) {
            return 2; // 2 images visibles pour les petits écrans
        }
        return 4; // 4 images visibles pour les écrans plus grands
    }

    // Fonction pour déplacer le carousel à l'image suivante
    function nextSlide() {
        const visibleSlides = getVisibleSlides();
        if (currentIndex < totalSlides - visibleSlides) {
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
        const visibleSlides = getVisibleSlides();
        const slideWidth = slides[0].offsetWidth;
        const margin = 10; // Ajuster cette valeur selon la marge entre les images
        carouselInner.style.transform = `translateX(-${(slideWidth + margin) * currentIndex}px)`;

        // Gestion de l'état des boutons de navigation
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalSlides - visibleSlides;
    }

    // Écouteurs d'événements pour les boutons de navigation
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Mettre à jour le carrousel initialement
    updateCarousel();

    // Mettre à jour le carrousel lors du redimensionnement de la fenêtre
    window.addEventListener("resize", updateCarousel);

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

document.addEventListener("DOMContentLoaded", function() {
    var navbarToggle = document.getElementById("navbar-toggle");
    var navbarMenu = document.querySelector(".navbar ul");

    navbarToggle.addEventListener("click", function() {
        navbarMenu.classList.toggle("active");
    });
});

document.querySelector('.custom-container form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupération des valeurs du formulaire
    const name = document.getElementById('name').value;
    const prenom = document.getElementById('prenom').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Configuration de l'envoi d'e-mail avec Email.js
    emailjs.send("service_xxpru7l", "template_avfkarf", {
        from_name: name,
        from_prenom: prenom,
        from_phone: phone,
        from_email: email,
        message: message,
        to_email: "s.barkaoui-france-metal77@outlook.fr" 
    }, "8iw9LMjjIvMFxlspM")
    .then(function(response) {
        console.log("E-mail envoyé avec succès !", response);
        alert("Votre message a été envoyé avec succès.");
        // Réinitialisation du formulaire
        document.querySelector('.custom-container form').reset();
    }, function(error) {
        console.error("Erreur lors de l'envoi de l'e-mail :", error);
        alert("Une erreur est survenue lors de l'envoi de votre message.");
    });
});