const $el = document.querySelector('.swiper');

if ($el) {
  // import Swiper JS dynamically if element exists
  Promise.all([
    import('swiper'),
    import('swiper/css'),
  ]).then(([{ default: Swiper }]) => {
    const swiper = new Swiper('.swiper');
  });
}
