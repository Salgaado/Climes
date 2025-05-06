const swiper = new Swiper('.specialties__swiper', {
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
});