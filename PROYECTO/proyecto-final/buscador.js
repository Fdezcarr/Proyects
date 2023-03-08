let slideIndex = 1;
let slideTimer;

showSlides();

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Iniciar el slider automáticamente
slideTimer = setInterval(function() {
  plusSlides(1);
}, 3000);

// Detener el slider cuando el usuario interactúa con él
let sliderContainer = document.getElementById("slider-container");
sliderContainer.addEventListener("mouseover", function() {
  clearInterval(slideTimer);
});

sliderContainer.addEventListener("mouseout", function() {
  slideTimer = setInterval(function() {
    plusSlides(1);
  }, 3000);
});
