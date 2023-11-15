// function setHeroImage() {
//     let photoGallery = [
//       "IMAGES/image-01.jpg",
//       "IMAGES/image-02.jpg",
//       "IMAGES/image-03.jpg",
//       "IMAGES/image-04.jpg",
//       "IMAGES/image-05.jpg",
//       "IMAGES/image-06.jpg"
//     ];
  
//     var heroImage = document.querySelector(".section-hero");
  
//     var randomPhoto = photoGallery[Math.floor(Math.random() * photoGallery.length)];
  
//     heroImage.style.backgroundImage = `url(${randomPhoto})`;
//     heroImage.style.maxHeight = `${window.innerHeight}px`;
//   }
  
//   // Add an event listener for window resize
//   window.addEventListener("resize", setHeroImage);
  
//   // Call the function when the page, including all resources, has fully loaded
//   window.onload = setHeroImage;

let debounceTimer;
const debounceDelay = 250; // Adjust the debounce delay as needed

function setHeroImage() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(function () {
    let photoGallery = [
      "IMAGES/image-01.jpg",
      "IMAGES/image-02.jpg",
      "IMAGES/image-03.jpg",
      "IMAGES/image-04.jpg",
      "IMAGES/image-05.jpg",
      "IMAGES/image-06.jpg"
    ];

    var heroImage = document.querySelector(".section-hero");

    var randomPhoto = photoGallery[Math.floor(Math.random() * photoGallery.length)];

    heroImage.style.backgroundImage = `url(${randomPhoto})`;
    heroImage.style.maxHeight = `${window.innerHeight}px`;
  }, debounceDelay);
}

// Add an event listener for window resize
window.addEventListener("resize", setHeroImage);

// Call the function when the page, including all resources, has fully loaded
window.onload = setHeroImage;


//selecting the modal
var modal = document.getElementById("myModal");

//selecting button
var btn = document.querySelector(".section-hero_menubutton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}