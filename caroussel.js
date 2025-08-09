const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');
let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${100 * index}%)`;
}

prevBtn.addEventListener('click', () => {
  if (index > 0) index--;
  else index = slides.length - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

// Optionnel : défilement automatique toutes les 5 secondes
setInterval(() => {
  index = (index + 1) % slides.length;
  updateCarousel();
}, 5000);
