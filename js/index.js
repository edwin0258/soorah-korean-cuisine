var menuToggle = document.getElementById("menuToggle");
var navigation = document.getElementById("navigation");
var navigationList = document.getElementById("navigationList");
var toggled = false;
var textColorChanged = false;

menuToggle.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  toggled = !toggled;
  if(toggled) {
    navigation.className += " expandNavigation";
    menuToggle.className += " closeButton";
  } else {
    navigation.className = "mainNavigation";
    menuToggle.className = "mobileMenuButton";
  }
}


let slideshowImages = ["bbq.jpg","spicyPork.jpg","dumplings.jpg","spicySeafoodBibimbap.jpg","kalbiBeef.jpg","veggieTempura.jpg"];

let slidesContainer = document.getElementById("slidesContainer");

slideshowImages.forEach((image) => {
  let slide = document.createElement("div");
  slide.className = "slide";
  slide.style.backgroundImage = `url('./images/${image}')`; console.log(`/images/${image}`);
  slidesContainer.appendChild(slide);
});

let slideshowTimeout;
startSlides();
let slideCount = 1;
function moveSlides(use = "") {

  if(slideCount <= slideshowImages.length - 1) {
    slidesContainer.style.transform = `translate3d(${-slidesContainer.offsetWidth * slideCount}px, 0, 0)`;
    slideCount += 1;
  } else {
    slidesContainer.style.transform = `translate3d(0, 0, 0)`;
    slideCount = 1;
  }
  if(use == "continuous") {
    slideshowTimeout = setTimeout(() => {moveSlides("continuous")}, 4000);
  }
  
}


let slideshowNavigation = document.getElementById("slideshowNavigation");
slideshowNavigation.addEventListener("mouseover", stopSlides);
slideshowNavigation.addEventListener("mouseleave", startSlides);
function stopSlides() {
  clearTimeout(slideshowTimeout);
}

function startSlides() {
  slideshowTimeout = setTimeout(() => {moveSlides("continuous")}, 4000);
}




let slideshowPrev = document.getElementById("slideshowPrev");
let slideshowNext = document.getElementById("slideshowNext");

slideshowPrev.addEventListener("click", prevSlide);
slideshowNext.addEventListener("click", nextSlide);

function prevSlide() {
 slideCount -= 2;
 if(slideCount < 1) {
    slideCount = slideshowImages.length - 1;
 }
  moveSlides();
}

function nextSlide() {
  moveSlides();
}