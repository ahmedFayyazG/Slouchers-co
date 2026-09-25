document.addEventListener('click', function (event) {
  const next = event.target.closest('[data-scroll-next]');
  if (next) {
    const track = next.previousElementSibling;
    if (track) track.scrollBy({left: track.clientWidth * .75, behavior: 'smooth'});
  }
  const thumb = event.target.closest('[data-product-image]');
  if (thumb) {
    const image = document.getElementById('sl-main-product-image');
    if (image) { image.src = thumb.dataset.productImage; image.srcset = ''; }
    document.querySelectorAll('.sl-pdp__thumb').forEach(el => el.style.border = '1px solid #eee');
    thumb.style.border = '2px solid #222';
  }
});
