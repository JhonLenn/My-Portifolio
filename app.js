const hamburguer = document.querySelector('.header .nav-bar .nav-list .hamburguer');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    mobile_menu.classList.toggle( 'd-flex');
    mobile_menu.classList.toggle('active');
})

window.onload = function() {
    const header = document.querySelector('.header');
  
    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 800) {
            header.style.backgroundColor = "#29333c";
        } else {
            header.style.backgroundColor = "transparent";
        }
    });
  }