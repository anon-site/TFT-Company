// ===== TFT Company — Main JS =====

document.addEventListener('DOMContentLoaded', () => {

  // Navbar scroll + back-to-top
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 20);
    if (backTop) backTop.classList.toggle('show', y > 500);
  });
  if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  function closeMenu() {
    if (!navLinks) return;
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
  function openMenu() {
    if (!navLinks) return;
    navLinks.classList.add('active');
    document.body.classList.add('menu-open');
  }
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.contains('active') ? closeMenu() : openMenu();
    });
    document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', closeMenu));
    // Close on backdrop click
    document.addEventListener('click', e => {
      if (document.body.classList.contains('menu-open') &&
          !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMenu();
      }
    });
    // Close on Escape
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Contact form (FormSubmit.co handles delivery to tft@tftinfo.net)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  }

  // Cookie consent (GDPR)
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  const cookieDecline = document.getElementById('cookieDecline');
  if (cookieBanner && cookieAccept && cookieDecline) {
    if (!localStorage.getItem('tft_cookie_consent')) {
      setTimeout(() => cookieBanner.classList.add('show'), 1200);
    }
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('tft_cookie_consent', 'accepted');
      cookieBanner.classList.remove('show');
    });
    cookieDecline.addEventListener('click', () => {
      localStorage.setItem('tft_cookie_consent', 'declined');
      cookieBanner.classList.remove('show');
    });
  }

});
