"use strict";

var images = ["BeefBibimbab", "BeefTofuSoup", "BuckwheatNoodleSoup", "BuckwheatNoodleSoup2", "ChickenFriedRice", "ChickenKatsuBento", "sushiBar", "FishCake", "FriedRice", "dinner", "Kimchi", "MisoSoup", "PanFriedDumplings", "PanSearedDumplings", "PorkBulgogi", "Ramyun", "restaurant3", "restaurant4", "SeafoodPancake", "SeafoodTofuSoup", "ShortRibs", "SpicyChickenBulgogi", "StackedBentoWithGalbi", "SteamedDumplings"];
var galleryContent = document.querySelector(".galleryContent");

images.forEach(function (name, i) {
  var imageContainer = document.createElement("div");
  imageContainer.className = "galleryImageContainer";

  var imagePath = "./images/gallery/" + name + "-snapshot.jpg";
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

function getImage(i) {
  var image = document.querySelector(".galleryImage" + i).cloneNode(true);
  var newPath = image.src.split("/");
  newPath = "./images/gallery/" + newPath[newPath.length - 1].replace("-snapshot","");
  image.setAttribute("src", newPath);
  return image;
}

function enterSlideshow(i) {
  imageNum = i;
  gallerySlideshow.style.display = "flex";
  gallerySlideshow.appendChild(getImage(imageNum));
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
  gallerySlideshow.appendChild(getImage(imageNum));
}

function prevImage() {
  imageNum -= 1;
  gallerySlideshow.removeChild(gallerySlideshow.lastChild);
  if (imageNum < 0) {
    imageNum = images.length - 1;
    console.log(imageNum);
  }
  gallerySlideshow.appendChild(getImage(imageNum));
}

function closeGallery() {
  gallerySlideshow.style.display = "none";
  gallerySlideshow.removeChild(gallerySlideshow.lastChild);
}