
const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

function toggleMenu(){
  menu.classList.toggle("menu_opened");
}
openMenu.addEventListener("click" , toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function(){
    menu.classList.remove("menu_opened");
  })
})
