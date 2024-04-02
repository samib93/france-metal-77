document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const images = carouselInner.children;
    const totalImages = images.length;
    const imageWidth = images[0].offsetWidth; // Largeur d'une image en pixels
    const visibleImages = 3; // Nombre d'images visibles à la fois
    let currentIndex = 0;

    // Changer le temps d'intervalle ici (en millisecondes)
    const intervalTime = 5000; // par exemple, 5000 millisecondes (5 secondes)

    setInterval(function() {
        currentIndex++;

        // Déplacer le carrousel vers la prochaine image
        carouselInner.style.transition = 'transform 1s ease'; // Activer la transition pour un défilement fluide
        carouselInner.style.transform = `translateX(-${currentIndex * imageWidth * visibleImages}px)`;

        // Si le carrousel atteint la dernière image, ramener la première image à côté de la dernière image avec une transition instantanée
        if (currentIndex >= Math.ceil(totalImages / visibleImages)) {
            setTimeout(() => {
                currentIndex = 0; // Réinitialiser l'indice
                carouselInner.style.transition = 'none'; // Désactiver la transition pour un défilement instantané
                carouselInner.style.transform = `translateX(0)`;
            }, 1000); // Délai pour permettre à la transition de se terminer
        }
    }, intervalTime);
});
