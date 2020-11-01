var navbar = document.getElementById("navbar");
var menu = document.getElementById("navbar-menu");
if (navbar) {
  navbar.addEventListener("click", function (e) {
    menu.classList.toggle("navbar-toggle");
  });
}
