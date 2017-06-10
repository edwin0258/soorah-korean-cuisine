var menuToggle = document.getElementById("menuToggle");
var navigation = document.getElementById("navigation");
var toggled = false;

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