"use strict";

var images = ["BeefBibimbab", "BeefTofuSoup", "BuckwheatNoodleSoup", "BuckwheatNoodleSoup2", "ChickenFriedRice", "ChickenKatsuBento", "Fish", "FishCake", "FriedRice", "Gallery2", "Kimchi", "MisoSoup", "PanFriedDumplings", "PanSearedDumplings", "PorkBulgogi", "Ramyun", "restaurant3", "restaurant4", "SeafoodPancake", "SeafoodTofuSoup", "ShortRibs", "SpicyChickenBulgogi", "StackedBentoWithGalbi", "SteamedDumplings"];
var galleryContent = document.querySelector(".galleryContent");

images.forEach(function (name, i) {
  var imageContainer = document.createElement("div");
  imageContainer.className = "galleryImageContainer";

  var imagePath = "./images/gallery/" + name + ".jpg";
  var image = document.createElement("img");
  var description = name.split(/(?=[A-Z])/g).join(" ").toLowerCase();
  var imageDescription = document.createElement("div");
  imageDescription.className = "imageDescription";
  imageDescription.appendChild(document.createTextNode(description));
  image.setAttribute("alt", description);
  image.setAttribute("src", imagePath);
  image.className = "galleryImage galleryImage" + i;
  galleryContent.appendChild(imageContainer.appendChild(image).parentNode.appendChild(imageDescription).parentNode);
  imageContainer.addEventListener("click", function () {
    enterSlideshow(i);
  });
});

var gallerySlideshow = document.querySelector(".gallerySlideshow");
var galleryNext = document.getElementById("galleryNext");
var galleryPrev = document.getElementById("galleryPrev");
var galleryClose = document.getElementById("gallerySlideshowClose");
var imageNum = void 0;
function enterSlideshow(i) {
  imageNum = i;
  gallerySlideshow.style.display = "flex";
  var image = document.querySelector(".galleryImage" + imageNum).cloneNode(true);
  gallerySlideshow.appendChild(image);
}

galleryNext.addEventListener("click", nextImage);
galleryPrev.addEventListener("click", prevImage);
galleryClose.addEventListener("click", closeGallery);

function nextImage() {
  imageNum += 1;
  gallerySlideshow.removeChild(gallerySlideshow.lastChild);
  if (!document.querySelector(".galleryImage" + imageNum)) {
    imageNum = 0;
  }
  var image = document.querySelector(".galleryImage" + imageNum).cloneNode(true);
  gallerySlideshow.appendChild(image);
}

function prevImage() {
  imageNum -= 1;
  gallerySlideshow.removeChild(gallerySlideshow.lastChild);
  if (imageNum < 0) {
    imageNum = images.length - 1;
    console.log(imageNum);
  }
  var image = document.querySelector(".galleryImage" + imageNum).cloneNode(true);
  gallerySlideshow.appendChild(image);
}

function closeGallery() {
  gallerySlideshow.style.display = "none";
  gallerySlideshow.removeChild(gallerySlideshow.lastChild);
}