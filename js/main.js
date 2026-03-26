/* ============================================
   MAIN.JS — Navbar, Filters, Misc
   ============================================ */

// ===== NAVBAR SCROLL =====
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
})();


// ===== HAMBURGER MENU =====
(function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close on nav link click
  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
})();


// ===== PROJECT FILTER =====
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.97)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
})();


// ===== BACK TO TOP =====
(function () {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


// ===== SMOOTH SCROLL FOR ANCHORS =====
(function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = 80; // navbar height
      const targetY = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });
})();


// ===== PROFILE IMAGE FALLBACK =====
(function () {
  const img = document.getElementById('profileImg');
  if (!img) return;

  img.addEventListener('error', () => {
    // Create SVG avatar fallback
    img.style.display = 'none';
    const frame = img.parentElement;

    const fallback = document.createElement('div');
    fallback.style.cssText = `
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #1e3a5f 0%, #0a1628 40%, #030712 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Orbitron', monospace;
      font-size: 4rem;
      font-weight: 900;
      color: rgba(0, 245, 255, 0.6);
      border: 2px solid rgba(0, 245, 255, 0.2);
      position: relative;
      z-index: 2;
      text-shadow: 0 0 30px rgba(0, 245, 255, 0.4);
      letter-spacing: 0.05em;
    `;
    fallback.textContent = 'SV';
    frame.insertBefore(fallback, img);
  });
})();


// ===== CARD GLOW MOUSE TRACKING =====
(function () {
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = (x / rect.width) * 100;
      const yPct = (y / rect.height) * 100;

      card.style.setProperty('--mouse-x', `${xPct}%`);
      card.style.setProperty('--mouse-y', `${yPct}%`);

      const glow = card.querySelector('.card-glow');
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${xPct}% ${yPct}%, rgba(0,245,255,0.08), transparent 60%)`;
      }
    });
  });
})();


// ===== CONSOLE EASTER EGG =====
console.log(
  `%c
  ███████╗██████╗ ███████╗███████╗███╗   ██╗ █████╗ ███╗   ██╗██████╗ 
  ██╔════╝██╔══██╗██╔════╝██╔════╝████╗  ██║██╔══██╗████╗  ██║██╔══██╗
  ███████╗██████╔╝█████╗  █████╗  ██╔██╗ ██║███████║██╔██╗ ██║██║  ██║
  ╚════██║██╔══██╗██╔══╝  ██╔══╝  ██║╚██╗██║██╔══██║██║╚██╗██║██║  ██║
  ███████║██║  ██║███████╗███████╗██║ ╚████║██║  ██║██║ ╚████║██████╔╝
  ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ 
  
  👋 Hey there, curious developer!
  🧠 Built by Sreenand Vinod A V
  📧 sreenandmzhd@gmail.com
  🐙 github.com/sreenand22-2003
  `,
  'color: #00f5ff; font-family: monospace;'
);
