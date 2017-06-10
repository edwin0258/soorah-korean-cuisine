let menuNext = document.getElementById("menuNext");
let menuPrev = document.getElementById("menuPrev");
let menuImage = document.getElementById("menuImage");
let menu = document.getElementById("menu");
let menuCounter = document.getElementById("counter");
let menuListItems = document.querySelectorAll(".menuListItemName");
let textMenuPages = document.querySelectorAll(".textMenuPage");
let lunchMenuToggle = document.getElementById("lunchMenuToggle");
let textMenu = document.getElementById("textMenu");
let pageNotes = document.querySelectorAll(".pageNote");

menuNext.addEventListener("click", nextMenu);
menuPrev.addEventListener("click", prevMenu);
//menu.addEventListener("click", nextMenu);
// To be added.

let menuCount = 0;
let textMenuCount = 0;
let menuMax;
let menuTextMax;
let menuSrc;
let menuType;
function initMenu(menu) {
  if(menu == "dinner") {
    menuMax = 9;
    menuTextMax = 7;
    menuType = "dinner";
  } else {
    menuMax = 7;
    menuTextMax = 5;
    menuType = "lunch";
  }
}

function prevMenu() {
  menuCount -= 1;
  textMenuCount -= 1;
  if (menuCount < 0) {
    menuCount = menuMax;
  }
  if(textMenuCount < 0) {
    textMenuCount = menuTextMax;
  }

  if(menuType == "lunch") {
    menuImage.src = `images/SooRahLunch${menuCount}.jpg`;
  } else if(menuType == "dinner") {
    menuImage.src = `images/dinnerMenu${menuCount}.jpg`;
  }
  
  hidePages();
  textMenuPages[textMenuCount].style.display = "block";
  count();
}

function nextMenu() {
  menuCount += 1;
  textMenuCount += 1;
  if(menuCount > menuMax) {
    menuCount = 0;
  }
  if(textMenuCount > menuTextMax) {
    textMenuCount = 0;
  }
  if(menuType == "lunch") {
    menuImage.src = `images/SooRahLunch${menuCount}.jpg`;
  } else if(menuType == "dinner") {
    menuImage.src = `images/dinnerMenu${menuCount}.jpg`;
  }
  hidePages();
  textMenuPages[textMenuCount].style.display = "block";
  count();
}


function count(x) {
  if(menuCounter.firstChild) {
    menuCounter.removeChild(menuCounter.firstChild);
  }
  if(x) {
    menuCounter.appendChild(document.createTextNode(x));
  } else {
    menuCounter.appendChild(document.createTextNode(menuCount + 1));
  }
}

if(menuType == "lunch") {
  itemPages = [2,3,4,5,6,7];
} else {
  itemPages = [2,3,4,5,6,7,8,9];
}

Array.prototype.forEach.call(menuListItems, (item,i) => item.addEventListener("click", () => {menuTo(itemPages[i])}));


function menuTo(index) {
  menuCount = index - 1;
  textMenuCount = index - 2;
  if(menuType == "lunch") {
    menuImage.src = `images/SooRahLunch${menuCount}.jpg`;
  } else if(menuType == "dinner") {
    menuImage.src = `images/dinnerMenu${menuCount}.jpg`;
  }
  hidePages();
  textMenuPages[textMenuCount].style.display = "block";
  count();
} 



textMenuPages[0].style.display = "block";
function hidePages() {
  Array.prototype.forEach.call(textMenuPages, page => page.style.display = "none");
}


let textMenuToggled = false;
lunchMenuToggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  textMenuToggled = !textMenuToggled;
  if(textMenuToggled) {
    textMenu.style.display = "block";
    menuImage.style.display = "none";
    menuCounter.style.display = "none";
    Array.prototype.forEach.call(pageNotes, note => note.style.display = "none");
    lunchMenuToggle.className += " menuTypeText";
  } else {
    textMenu.style.display = "none";
    menuImage.style.display = "block";
    menuCounter.style.display = "flex";
    Array.prototype.forEach.call(pageNotes, note => note.style.display = "inline");
    lunchMenuToggle.className = "menuTypeBtn";
  }
}