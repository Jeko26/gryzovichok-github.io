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

var swiper = new Swiper("swiper__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    mousewheel: true,
    keyboard: true
});