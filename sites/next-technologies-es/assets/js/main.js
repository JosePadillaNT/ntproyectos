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

