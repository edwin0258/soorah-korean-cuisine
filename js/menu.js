"use strict";

var menuNext = document.getElementById("menuNext");
var menuPrev = document.getElementById("menuPrev");
var menuImage = document.getElementById("menuImage");
var menu = document.getElementById("menu");
var menuCounter = document.getElementById("counter");
var menuListItems = document.querySelectorAll(".menuListItemName");
var textMenuPages = document.querySelectorAll(".textMenuPage");
var lunchMenuToggle = document.getElementById("lunchMenuToggle");
var textMenu = document.getElementById("textMenu");
var pageNotes = document.querySelectorAll(".pageNote");
var idQuery = window.location.search.substring(1);
var pageId = idQuery.split("=")[1];

menuNext.addEventListener("click", nextMenu);
menuPrev.addEventListener("click", prevMenu);
//menu.addEventListener("click", nextMenu);
// To be added.

var menuCount = 0;
var textMenuCount = 0;
var menuMax = void 0;
var menuTextMax = void 0;
var menuSrc = void 0;
var menuType = void 0;
function initMenu(menu) {
  if (menu == "dinner") {
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
  if (textMenuCount < 0) {
    textMenuCount = menuTextMax;
  }

  if (menuType == "lunch") {
    menuImage.src = "images/SooRahLunch" + menuCount + ".jpg";
  } else if (menuType == "dinner") {
    menuImage.src = "images/dinnerMenu" + menuCount + ".jpg";
  }

  hidePages();
  textMenuPages[textMenuCount].style.display = "block";
  count();
}

function nextMenu() {
  menuCount += 1;
  textMenuCount += 1;
  if (menuCount > menuMax) {
    menuCount = 0;
  }
  if (textMenuCount > menuTextMax) {
    textMenuCount = 0;
  }
  if (menuType == "lunch") {
    menuImage.src = "images/SooRahLunch" + menuCount + ".jpg";
  } else if (menuType == "dinner") {
    menuImage.src = "images/dinnerMenu" + menuCount + ".jpg";
  }
  hidePages();
  textMenuPages[textMenuCount].style.display = "block";
  count();
}

function count(x) {
  if (menuCounter.firstChild) {
    menuCounter.removeChild(menuCounter.firstChild);
  }
  if (x) {
    menuCounter.appendChild(document.createTextNode(x));
  } else {
    menuCounter.appendChild(document.createTextNode(menuCount + 1));
  }
}

if (menuType == "lunch") {
  itemPages = [2, 3, 4, 5, 6, 7];
} else {
  itemPages = [2, 3, 4, 5, 6, 7, 8, 9];
}

Array.prototype.forEach.call(menuListItems, function (item, i) {
  return item.addEventListener("click", function () {
    menuTo(itemPages[i]);
  });
});

function menuTo(index) {
  menuCount = index - 1;
  textMenuCount = index - 2;
  if (menuType == "lunch") {
    menuImage.src = "images/SooRahLunch" + menuCount + ".jpg";
  } else if (menuType == "dinner") {
    menuImage.src = "images/dinnerMenu" + menuCount + ".jpg";
  }
  hidePages();
  textMenuPages[textMenuCount].style.display = "block";
  count();
}

textMenuPages[0].style.display = "block";
function hidePages() {
  Array.prototype.forEach.call(textMenuPages, function (page) {
    return page.style.display = "none";
  });
}

var textMenuToggled = false;
lunchMenuToggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  textMenuToggled = !textMenuToggled;
  if (textMenuToggled) {
    textMenu.style.display = "block";
    menuImage.style.display = "none";
    menuCounter.style.display = "none";
    Array.prototype.forEach.call(pageNotes, function (note) {
      return note.style.display = "none";
    });
    lunchMenuToggle.className += " menuTypeText";
  } else {
    textMenu.style.display = "none";
    menuImage.style.display = "block";
    menuCounter.style.display = "flex";
    Array.prototype.forEach.call(pageNotes, function (note) {
      return note.style.display = "inline";
    });
    lunchMenuToggle.className = "menuTypeBtn";
  }
}

function menuToQuery(i) {
  menuTo(i);
  menuImage.src = "images/dinnerMenu" + i + ".jpg";
}

if (pageId) {
  menuToQuery(pageId);
};