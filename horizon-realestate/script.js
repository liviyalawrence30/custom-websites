/* ==========================================================================
   HORIZON LUXURY PROPERTIES - JAVASCRIPT FUNCTIONALITY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Sticky Navbar & Active Link Scroll Spy
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentScroll = window.scrollY + 120;
    sections.forEach((sec) => {
      const secTop = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      const secId = sec.getAttribute('id');

      if (currentScroll >= secTop && currentScroll < secTop + secHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 2. Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // 3. Property Category Filter
  const pFilterBtns = document.querySelectorAll('.p-filter-btn');
  const propCards = document.querySelectorAll('.property-card');

  pFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      pFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      propCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Contact Form Validation
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const toast = document.getElementById('toast');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.closest('.form-group').classList.add('error');
      valid = false;
    } else {
      nameInput.closest('.form-group').classList.remove('error');
    }

    // Validate Email
    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
      emailInput.closest('.form-group').classList.add('error');
      valid = false;
    } else {
      emailInput.closest('.form-group').classList.remove('error');
    }

    // Validate Phone
    if (!phoneInput.value.trim()) {
      phoneInput.closest('.form-group').classList.add('error');
      valid = false;
    } else {
      phoneInput.closest('.form-group').classList.remove('error');
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageInput.closest('.form-group').classList.add('error');
      valid = false;
    } else {
      messageInput.closest('.form-group').classList.remove('error');
    }

    if (valid) {
      toast.classList.remove('hidden');
      contactForm.reset();
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 5000);
    }
  });

});
