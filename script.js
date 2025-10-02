// small helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// set year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for anchor links
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn && menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

// fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const handleFades = () => {
  faders.forEach(f => {
    const rect = f.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) f.classList.add('show');
  });
};
window.addEventListener('scroll', handleFades);
window.addEventListener('load', handleFades);

// contact form handler (demo)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert('Harap isi semua field!');
      return;
    }
    // demo: prepare message for WhatsApp with encodeURIComponent
    const text = `Halo, saya ${name}. Pesan: ${message} (${email})`;
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    contactForm.reset();
  });
}

// product detail buttons (simple modal demo)
document.querySelectorAll('.card .btn.outline').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.dataset.product || 'Produk';
    alert(`${product}\n\nDetail demo — hubungi WhatsApp untuk pembelian.`);
  });
});
