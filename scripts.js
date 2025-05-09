const swiper = new Swiper('.specialties__swiper', {
  loop: true,
  centeredSlides: true,
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
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // Mobile: 1 slide
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      coverflowEffect: { depth: 50, modifier: 1.5 },
    },
    // Tablet: 2 slides
    391: {
      slidesPerView: 2,
      spaceBetween: 20,
      coverflowEffect: { depth: 80, modifier: 2 },
    },
    // Desktop: 3 slides
    769: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});