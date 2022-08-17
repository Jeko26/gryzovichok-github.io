let burger = document.querySelector('.burger');
let links = document.querySelector('.header__links--burger');
burger.addEventListener('click', function () {
	links.classList.toggle('burger--open');
	burger.classList.toggle('burger--cross');
});

var swiper = new Swiper(".swiper__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
  });

ymaps.ready(init);
map.addOverlay(placemark);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [58.0446, 38.8426],
    zoom: 11,
  });
}