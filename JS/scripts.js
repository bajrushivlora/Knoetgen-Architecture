let photoGallery = [
    "IMAGES/image-01.jpg",
    "IMAGES/image-02.jpg",
    "IMAGES/image-03.jpg",
    "IMAGES/image-04.jpg",
    "IMAGES/image-05.jpg",
    "IMAGES/image-06.jpg"
  ];

var heroImage = document.querySelector(".section-hero");

var randomPhoto = photoGallery[Math.floor(Math.random()*photoGallery.length)];

document.addEventListener("DOMContentLoaded", function(){
    heroImage.style.backgroundImage = `url(${randomPhoto})`;
});


var mediaQuery = window.matchMedia("(max-width: 520px)");

// Check if the media query matches
if (mediaQuery.matches) {
    heroImage.style.height = `${window.innerHeight}px`;
} else {
    heroImage.style.height = "100vh";
}

// Add an event listener to respond to changes in screen size
mediaQuery.addListener(function (event) {
  if (event.matches) {
    heroImage.style.height = `${window.innerHeight}px`;
  } else {
    heroImage.style.height = "100vh";
  }
});