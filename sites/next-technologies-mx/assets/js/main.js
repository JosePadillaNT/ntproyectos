// NT Landing — México | VanillaJS

// ── Navegación móvil ──────────────────────────────────────────────────────────
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuBtn.setAttribute('aria-expanded',
    menuBtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
});

// Cerrar menú al hacer clic en un enlace
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// ── Navbar scroll ─────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('bg-nt-dark', 'shadow-lg');
    navbar?.classList.remove('bg-transparent');
  } else {
    navbar?.classList.remove('bg-nt-dark', 'shadow-lg');
    navbar?.classList.add('bg-transparent');
  }
});

// ── Smooth scroll ─────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Animación al entrar en viewport ──────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Contador animado ──────────────────────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('es-MX');
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ── Formulario de contacto ────────────────────────────────────────────────────
const form = document.getElementById('contact-form');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Enviando…';
  btn.disabled = true;

  // Integración futura con microservicio GCP
  await new Promise(r => setTimeout(r, 1500));
  btn.textContent = '¡Mensaje enviado!';
  btn.classList.replace('bg-nt-accent', 'bg-green-500');
  form.reset();
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
    btn.classList.replace('bg-green-500', 'bg-nt-accent');
  }, 3000);
});
