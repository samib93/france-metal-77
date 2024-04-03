document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const images = carouselInner.querySelectorAll('img');
    const totalImages = images.length;
    const imageWidth = images[0].offsetWidth; 
    const visibleImages = 3; 
    let currentIndex = 0;

    
    for (let i = 0; i < visibleImages; i++) {
        const clone = images[i].cloneNode(true);
        carouselInner.appendChild(clone);
    }

   
    const intervalTime = 5000; 

    setInterval(function() {
        currentIndex++;

        
        carouselInner.style.transition = 'transform 1s ease'; 
        carouselInner.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

       
        if (currentIndex >= totalImages) {
            setTimeout(() => {
                currentIndex = 0; 
                carouselInner.style.transition = 'none'; 
                carouselInner.style.transform = `translateX(0)`;
            }, 1000); 
        }
    }, intervalTime);
});
