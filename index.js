let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselSlide = document.querySelector('.carousel-slide');
    const slideWidth = window.innerWidth <= 1200 ? window.innerWidth : 1200;
    carouselSlide.style.transform = `translateX(${-index * slideWidth}px)`;
}

function moveSlide(n) {
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

window.addEventListener('resize', () => showSlide(slideIndex));
showSlide(slideIndex);
