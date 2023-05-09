const swiper = new Swiper(".slider1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slideClass: "slide1",
  wrapperClass: "slider1__wrapper",
  slideToClickedSlide: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
