// ═══ NAV SCROLL ═══
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ═══ NAV TOGGLE ═══
function toggleNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  if (!toggle || !links || !overlay) return;
  const isOpen = links.classList.contains('open');
  toggle.classList.toggle('active');
  links.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ═══ ACTIVE NAV LINK ═══
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path) a.classList.add('active');
  });
})();

// ═══ SCROLL REVEAL ═══
function observeReveals() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', observeReveals);

// ═══ CUSTOM CURSOR ═══
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);
const dot = document.createElement('div');
dot.className = 'cursor-dot';
document.body.appendChild(dot);

let cx = 0, cy = 0, dx = 0, dy = 0;
document.addEventListener('mousemove', e => {
  dx = e.clientX; dy = e.clientY;
  dot.style.left = dx + 'px'; dot.style.top = dy + 'px';
});
function animateCursor() {
  cx += (dx - cx) * 0.12;
  cy += (dy - cy) * 0.12;
  cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

const hoverTargets = 'a, button, .btn-primary, .btn-outline, .btn-ghost, .card, .img-card, .price-card';
document.addEventListener('mouseover', e => {
  if (e.target.closest(hoverTargets)) cursor.classList.add('hovering');
});
document.addEventListener('mouseout', e => {
  if (e.target.closest(hoverTargets)) cursor.classList.remove('hovering');
});
document.body.style.cursor = 'none';

// ═══ TILT ON CARDS ═══
document.querySelectorAll('.card, .img-card, .price-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-4px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ═══ CARD SHINE ═══
document.querySelectorAll('.card, .img-card, .price-card').forEach(el => {
  if (!el.querySelector('.shine-layer')) {
    const s = document.createElement('div');
    s.className = 'shine-layer';
    s.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 50% 50%,rgba(122,158,126,0.04),transparent 60%);opacity:0;transition:opacity 0.4s;';
    el.style.position = 'relative';
    el.appendChild(s);
    el.addEventListener('mouseenter', () => s.style.opacity = '1');
    el.addEventListener('mouseleave', () => s.style.opacity = '0');
  }
});

// ═══ SMOOTH FORM SUBMIT FEEDBACK ═══
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    const btn = form.querySelector('button[type="submit"], .btn-primary');
    if (btn) { btn.textContent = 'Sending...'; btn.style.opacity = '0.7'; }
  });
});
