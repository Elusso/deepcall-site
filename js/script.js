/**
 * DeepCall Ocean v3 — Core Interactions
 */
(function() {
  'use strict';

  /* ── Hydrate class lists first, before any observer ── */
  document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-left').forEach(el => {
    el.classList.add('reveal');
  });

  /* ── BUBBLES ── */
  function genBubbles() {
    const container = document.getElementById('bubbles');
    if (!container) return;
    const count = window.innerWidth < 768 ? 15 : 30;
    for (let i = 0; i < count; i++) {
      const b = document.createElement('div');
      b.className = 'bubble';
      const size = Math.random() * 12 + 4;
      b.style.setProperty('--size', size + 'px');
      b.style.setProperty('--dur', (Math.random() * 8 + 6) + 's');
      b.style.setProperty('--delay', (Math.random() * 10) + 's');
      b.style.setProperty('--pos', (Math.random() * 100) + '%');
      container.appendChild(b);
    }
  }
  genBubbles();

  /* ── MOBILE MENU ── */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  function toggleMenu() {
    const open = mobileMenu.classList.toggle('open');
    mobileOverlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) {
    burger.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', toggleMenu);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', toggleMenu));
  }

  /* ── NAV SCROLL ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ── SCROLL-HINT HIDE ── */
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) scrollHint.style.opacity = '0';
    }, { passive: true });
  }

  /* ── INTERSECTION OBSERVER: reveal + counters ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const t = e.target;
      t.classList.add('visible');
      // counters
      const n = t.querySelector('.val, .num-val') || (t.matches('.val, .num-val') ? t : null);
      if (n && !n.dataset.animated) { n.dataset.animated = '1'; animateCounter(n); }
      io.unobserve(t);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-up, .reveal-scale, .reveal-left, .scheme-step, [data-step], .num-grid, .card, .product-card, .case-card, .base-card').forEach(el => io.observe(el));
  // observe hero stats explicitly
  document.querySelectorAll('.hero-stat .val, .num-val').forEach(el => {
    const p = el.closest('.hero-stat, .num-grid > div');
    if (p && !p.classList.contains('reveal')) { p.classList.add('reveal'); io.observe(p); }
    else if (!el.closest('.reveal')) { io.observe(el); }
  });

  /* ── ANIMATED COUNTERS ── */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    if (Number.isNaN(target)) return;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const isFloat = target % 1 !== 0;
    const dur = 2000;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = isFloat
        ? prefix + current.toFixed(1).replace('.', ',') + suffix
        : prefix + Math.floor(current).toLocaleString('ru-RU') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ── MOUSE-GLOW ON CARDS ── */
  document.querySelectorAll('.card, .product-card, .case-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--glow-x', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--glow-y', (e.clientY - rect.top) + 'px');
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--glow-x', '50%');
      card.style.setProperty('--glow-y', '50%');
    });
  });

  /* ── SMOOTH SCROLL FOR ANCHORS ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior:'smooth', block:'start' }); }
    });
  });

  console.log('[DeepCall] Ocean v3 initialized. Swim deep, catch fast.');
})();
