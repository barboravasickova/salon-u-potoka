(function () {
  'use strict';

  // Mobile navigation
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // References slider (ready for multiple slides)
  const track = document.getElementById('references-track');
  const prevBtn = document.getElementById('ref-prev');
  const nextBtn = document.getElementById('ref-next');

  if (track && prevBtn && nextBtn) {
    const slides = track.querySelectorAll('.references__slide');
    let currentIndex = 0;

    function goToSlide(index) {
      if (slides.length <= 1) return;
      currentIndex = (index + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
    }

    prevBtn.addEventListener('click', function () {
      goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function () {
      goToSlide(currentIndex + 1);
    });

    if (slides.length <= 1) {
      prevBtn.style.visibility = 'hidden';
      nextBtn.style.visibility = 'hidden';
    }
  }

  // Header shadow on scroll
  const header = document.getElementById('header');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 16px rgba(54, 38, 29, 0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
})();
