let images = ["BeefBibimbab","BeefTofuSoup","BuckwheatNoodleSoup","BuckwheatNoodleSoup2","ChickenFriedRice","ChickenKatsuBento","Fish","FishCake","FriedRice","Gallery2","Kimchi","MisoSoup","PanFriedDumplings","PanSearedDumplings","PorkBulgogi","Ramyun","restaurant3","restaurant4","SeafoodPancake","SeafoodTofuSoup","ShortRibs","SpicyChickenBulgogi","StackedBentoWithGalbi","SteamedDumplings"];
let galleryContent = document.querySelector(".galleryContent");

images.forEach((name,i) => {
  let imageContainer = document.createElement("div");
  imageContainer.className = "galleryImageContainer";
  
  let imagePath = `./images/gallery/${name}.jpg`;
  let image = document.createElement("img");
  let description = name.split(/(?=[A-Z])/g).join(" ").toLowerCase();
  let imageDescription = document.createElement("div");
  imageDescription.className = "imageDescription";
  imageDescription.appendChild(document.createTextNode(description));
  image.setAttribute("alt", description);
  image.setAttribute("src", imagePath);
  image.className = `galleryImage galleryImage${i}`;
  galleryContent.appendChild(imageContainer.appendChild(image).parentNode.appendChild(imageDescription).parentNode);
  imageContainer.addEventListener("click", () => {enterSlideshow(i)});
})

let gallerySlideshow = document.querySelector(".gallerySlideshow");
let galleryNext = document.getElementById("galleryNext");
let galleryPrev = document.getElementById("galleryPrev");
let galleryClose = document.getElementById("gallerySlideshowClose");
let imageNum;
function enterSlideshow(i) {
  imageNum = i;
  gallerySlideshow.style.display = "flex";
  let image = document.querySelector(`.galleryImage${imageNum}`).cloneNode(true);
  gallerySlideshow.appendChild(image)
}


galleryNext.addEventListener("click", nextImage);
galleryPrev.addEventListener("click", prevImage);
galleryClose.addEventListener("click", closeGallery);

function nextImage() {
  imageNum += 1;
  gallerySlideshow.removeChild(gallerySlideshow.lastChild);
  if(!document.querySelector(`.galleryImage${imageNum}`)) {
    imageNum = 0;
  }
  let image = document.querySelector(`.galleryImage${imageNum}`).cloneNode(true);
  gallerySlideshow.appendChild(image)
}

function prevImage() {
  imageNum -= 1;
  gallerySlideshow.removeChild(gallerySlideshow.lastChild);
  if(imageNum < 0) {
    imageNum = images.length - 1;
    console.log(imageNum);
  }
  let image = document.querySelector(`.galleryImage${imageNum}`).cloneNode(true);
  gallerySlideshow.appendChild(image)
}

function closeGallery() {
  gallerySlideshow.style.display = "none";
  gallerySlideshow.removeChild(gallerySlideshow.lastChild);
}