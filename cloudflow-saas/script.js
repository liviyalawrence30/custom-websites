/* ==========================================================================
   CLOUDFLOW SAAS PLATFORM - JAVASCRIPT FUNCTIONALITY
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

  // 3. Interactive Pricing Monthly / Yearly Billing Toggle
  const monthlyLabel = document.getElementById('monthly-label');
  const yearlyLabel = document.getElementById('yearly-label');
  const priceAmounts = document.querySelectorAll('.amount');

  monthlyLabel.addEventListener('click', () => {
    monthlyLabel.classList.add('active');
    yearlyLabel.classList.remove('active');
    priceAmounts.forEach((amt) => {
      amt.textContent = amt.getAttribute('data-monthly');
    });
  });

  yearlyLabel.addEventListener('click', () => {
    yearlyLabel.classList.add('active');
    monthlyLabel.classList.remove('active');
    priceAmounts.forEach((amt) => {
      amt.textContent = amt.getAttribute('data-yearly');
    });
  });

});
