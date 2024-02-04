const swiper = new Swiper(".swiper-container", {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 16,

  grabCursor: true,
  clickable: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 110,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
