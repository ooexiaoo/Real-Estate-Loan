// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Swiper Initialization
  var swiper = new Swiper(".mySwiper", {
    loop: false, //turning this on is causing slide skipping
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
  });
  // Pause autoplay on mouseenter
  swiper.el.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
  });

  // Resume autoplay on mouseleave
  swiper.el.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
  });
});

