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

(() => {
  const siteTop = document.querySelector('[data-site-top]');
  if (!siteTop) return;
  const header = siteTop.querySelector('[data-sd-header]');
  const triggers = [...siteTop.querySelectorAll('[data-mega-trigger]')];
  const panels = [...siteTop.querySelectorAll('[data-mega-panel]')];
  const mobileButton = siteTop.querySelector('[data-mobile-trigger]');
  const mobilePanel = siteTop.querySelector('#sd-mobile-nav');
  let closeTimer;
  const setScrolled = () => siteTop.classList.toggle('is-scrolled', window.scrollY > 90);
  const closeMega = () => {
    panels.forEach(panel => { panel.hidden = true; });
    triggers.forEach(button => button.setAttribute('aria-expanded', 'false'));
    siteTop.classList.remove('is-open');
  };
  const openMega = name => {
    if (window.matchMedia('(max-width: 760px)').matches) return;
    window.clearTimeout(closeTimer);
    panels.forEach(panel => { panel.hidden = panel.dataset.megaPanel !== name; });
    triggers.forEach(button => button.setAttribute('aria-expanded', String(button.dataset.megaTrigger === name)));
    siteTop.classList.add('is-open');
  };
  triggers.forEach(button => {
    button.addEventListener('mouseenter', () => openMega(button.dataset.megaTrigger));
    button.addEventListener('focus', () => openMega(button.dataset.megaTrigger));
    button.addEventListener('click', () => {
      if (button.getAttribute('aria-expanded') === 'true') closeMega();
      else openMega(button.dataset.megaTrigger);
    });
  });
  header.addEventListener('mouseleave', () => { closeTimer = window.setTimeout(closeMega, 170); });
  header.addEventListener('mouseenter', () => window.clearTimeout(closeTimer));
  document.addEventListener('click', event => {
    if (!siteTop.contains(event.target)) {
      closeMega();
      if (mobilePanel) mobilePanel.hidden = true;
      if (mobileButton) mobileButton.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMega();
      if (mobilePanel) mobilePanel.hidden = true;
      if (mobileButton) mobileButton.setAttribute('aria-expanded', 'false');
    }
  });
  if (mobileButton && mobilePanel) mobileButton.addEventListener('click', () => {
    const opening = mobilePanel.hidden;
    mobilePanel.hidden = !opening;
    mobileButton.setAttribute('aria-expanded', String(opening));
    siteTop.classList.toggle('is-open', opening);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760 && mobilePanel) mobilePanel.hidden = true;
    else closeMega();
  });
  window.addEventListener('scroll', setScrolled, { passive: true });
  setScrolled();
  document.querySelectorAll('[data-shop-tab]').forEach(tab => tab.addEventListener('click', () => {
    const target = tab.dataset.shopTab;
    document.querySelectorAll('[data-shop-tab]').forEach(item => item.setAttribute('aria-selected', String(item === tab)));
    document.querySelectorAll('[data-shop-panel]').forEach(panel => { panel.hidden = panel.dataset.shopPanel !== target; });
  }));
  document.querySelectorAll('[data-hero-play]').forEach(button => {
    const video = button.closest('.sd-hero')?.querySelector('video');
    if (!video) { button.hidden = true; return; }
    button.addEventListener('click', () => {
      if (video.paused) {
        video.play().then(() => {
          button.setAttribute('aria-label', 'Pause video');
          button.querySelector('span').textContent = 'Ⅱ';
        }).catch(() => {});
      } else {
        video.pause();
        button.setAttribute('aria-label', 'Play video');
        button.querySelector('span').textContent = '▶';
      }
    });
  });
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('sd-motion');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    document.querySelectorAll('.sd-reveal').forEach(element => observer.observe(element));
  } else document.querySelectorAll('.sd-reveal').forEach(element => element.classList.add('is-visible'));
})();
