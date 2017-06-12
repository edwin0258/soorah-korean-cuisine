"use strict";

var slideshowImages = ["bbq.jpg", "spicyPork.jpg", "dumplings.jpg", "spicySeafoodBibimbap.jpg", "kalbiBeef.jpg", "veggieTempura.jpg"];

var slidesContainer = document.getElementById("slidesContainer");

slideshowImages.forEach(function (image) {
  var slide = document.createElement("div");
  slide.className = "slide";
  slide.style.backgroundImage = "url('./images/" + image + "')";
  slidesContainer.appendChild(slide);
});

var slideshowTimeout = void 0;
startSlides();
var slideCount = 1;
function moveSlides() {
  var use = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";


  if (slideCount <= slideshowImages.length - 1) {
    slidesContainer.style.transform = "translate3d(" + -slidesContainer.offsetWidth * slideCount + "px, 0, 0)";
    slideCount += 1;
  } else {
    slidesContainer.style.transform = "translate3d(0, 0, 0)";
    slideCount = 1;
  }
  if (use == "continuous") {
    slideshowTimeout = setTimeout(function () {
      moveSlides("continuous");
    }, 4000);
  }
}

var slideshowNavigation = document.getElementById("slideshowNavigation");
slideshowNavigation.addEventListener("mouseover", stopSlides);
slideshowNavigation.addEventListener("mouseleave", startSlides);
function stopSlides() {
  clearTimeout(slideshowTimeout);
}

function startSlides() {
  slideshowTimeout = setTimeout(function () {
    moveSlides("continuous");
  }, 4000);
}

var slideshowPrev = document.getElementById("slideshowPrev");
var slideshowNext = document.getElementById("slideshowNext");

slideshowPrev.addEventListener("click", prevSlide);
slideshowNext.addEventListener("click", nextSlide);

function prevSlide() {
  slideCount -= 2;
  if (slideCount < 1) {
    slideCount = slideshowImages.length - 1;
  }
  moveSlides();
}

function nextSlide() {
  moveSlides();
}