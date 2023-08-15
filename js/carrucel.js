
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    function handleCarousel() {
        if (window.innerWidth < 700) {
            carouselContainer.style.overflowX = 'scroll';
        } else {
            carouselContainer.style.overflowX = 'hidden';
        }
    }

    function showSlide(index) {
        carouselContainer.scrollLeft = index * carouselContainer.offsetWidth;
        currentIndex = index;
    }

    function prevSlide() {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        }
    }

    function nextSlide() {
        if (currentIndex < carouselContainer.children.length - 1) {
            showSlide(currentIndex + 1);
        }
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    window.addEventListener('resize', handleCarousel);
    handleCarousel();

