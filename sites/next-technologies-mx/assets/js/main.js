/* ── NT Landing Pages — main.js ─────────────────────── */

// Navbar scroll state
(function () {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Mobile menu
(function () {
  const btn = document.getElementById('nav-mobile-btn');
  const nav = document.getElementById('navbar');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) nav.classList.remove('open');
  });
})();

// AOS
document.addEventListener('DOMContentLoaded', function () {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true, offset: 60 });
  }
});

// Rellax
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Rellax !== 'undefined' && document.querySelector('.rellax')) {
    new Rellax('.rellax', { speed: -2, center: true });
  }
});

// Lucide icons
document.addEventListener('DOMContentLoaded', function () {
  if (typeof lucide !== 'undefined') lucide.createIcons();
});

// Hero carousel
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('[data-hero-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.hero-carousel-track');
  const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
  const dots = Array.from(carousel.querySelectorAll('[data-hero-dot]'));
  const prev = carousel.querySelector('[data-hero-prev]');
  const next = carousel.querySelector('[data-hero-next]');
  if (!track || slides.length < 2) return;

  let current = 0;
  let timer = null;
  const interval = 6500;

  const goTo = (index) => {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === current);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === current);
    });
  };

  const start = () => {
    stop();
    timer = window.setInterval(() => goTo(current + 1), interval);
  };

  const stop = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };

  prev?.addEventListener('click', () => {
    goTo(current - 1);
    start();
  });

  next?.addEventListener('click', () => {
    goTo(current + 1);
    start();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goTo(Number(dot.dataset.heroDot));
      start();
    });
  });

  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  goTo(0);
  start();
});

// Animated counters
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      let start = 0;
      const step = target / 50;
      const timer = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = Math.floor(start).toLocaleString() + suffix;
        if (start >= target) clearInterval(timer);
      }, 30);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
});

// Contact form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    setTimeout(() => {
      btn.textContent = 'Mensaje enviado';
      btn.style.background = '#059669';
      form.reset();
    }, 1200);
  });
});


// ── Sticky bottom bar (aparece después de 600px de scroll) ──
(function () {
  var bar = document.querySelector('.bottom-bar');
  if (!bar) return;
  var shown = false;
  window.addEventListener('scroll', function () {
    var should = window.scrollY > 600;
    if (should !== shown) {
      bar.classList.toggle('visible', should);
      shown = should;
    }
  }, { passive: true });
})();
