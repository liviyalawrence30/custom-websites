/* ==========================================================================
   AURA BOUTIQUE & APPAREL - JAVASCRIPT FUNCTIONALITY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. STICKY NAVBAR & SCROLL SHADOW --- */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Nav Link Spy
    let currentScroll = window.scrollY + 120;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  /* --- 2. MOBILE MENU TOGGLE --- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const toggleIcon = mobileToggle.querySelector('i');

  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
      toggleIcon.classList.remove('fa-bars');
      toggleIcon.classList.add('fa-xmark');
    } else {
      toggleIcon.classList.remove('fa-xmark');
      toggleIcon.classList.add('fa-bars');
    }
  });

  // Close menu when clicking link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggleIcon.classList.remove('fa-xmark');
      toggleIcon.classList.add('fa-bars');
    });
  });

  /* --- 3. GALLERY CATEGORY FILTER --- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach((item) => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* --- 4. INTERSECTION OBSERVER SCROLL REVEAL --- */
  const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* --- 5. CONTACT FORM VALIDATION & SUBMISSION --- */
  const contactForm = document.getElementById('contact-form');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const formToast = document.getElementById('form-toast');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

  function validateField(input, isError, group) {
    if (isError) {
      group.classList.add('error');
      return false;
    } else {
      group.classList.remove('error');
      return true;
    }
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    const nameGroup = fullNameInput.closest('.form-group');
    if (!fullNameInput.value.trim()) {
      isValid = validateField(fullNameInput, true, nameGroup) && isValid;
    } else {
      validateField(fullNameInput, false, nameGroup);
    }

    // Validate Email
    const emailGroup = emailInput.closest('.form-group');
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      isValid = validateField(emailInput, true, emailGroup) && isValid;
    } else {
      validateField(emailInput, false, emailGroup);
    }

    // Validate Phone
    const phoneGroup = phoneInput.closest('.form-group');
    if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value.trim())) {
      isValid = validateField(phoneInput, true, phoneGroup) && isValid;
    } else {
      validateField(phoneInput, false, phoneGroup);
    }

    // Validate Message
    const messageGroup = messageInput.closest('.form-group');
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      isValid = validateField(messageInput, true, messageGroup) && isValid;
    } else {
      validateField(messageInput, false, messageGroup);
    }

    // If form is valid
    if (isValid) {
      const submitBtn = document.getElementById('submit-btn');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        formToast.classList.remove('hidden');
        contactForm.reset();

        setTimeout(() => {
          formToast.classList.add('hidden');
        }, 6000);
      }, 1200);
    }
  });

  // Real-time Input Error Removal
  [fullNameInput, emailInput, phoneInput, messageInput].forEach((input) => {
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group.classList.contains('error')) {
        group.classList.remove('error');
      }
    });
  });

});
