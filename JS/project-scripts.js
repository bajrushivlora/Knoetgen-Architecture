function setHeroImage() {
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
  }
  
  // Add an event listener for window resize
  window.addEventListener("resize", setHeroImage);
  
  // Call the function when the page, including all resources, has fully loaded
  window.onload = setHeroImage;
