
window.addEventListener('scroll', function () {
  var upto = window.scrollY;

  var scrollToTop = document.querySelector('.scrolltotop');
  var siteHeader = document.querySelector('.site-header');

  if (upto > 500) {
      scrollToTop.style.display = 'block';
  } else {
      scrollToTop.style.display = 'none';
  }

  if (upto > 50) {
      siteHeader.classList.add('nav-fixed');
  } else {
      siteHeader.classList.remove('nav-fixed');
  }
});




  document.querySelector('.toggler-button').addEventListener('click', function() {
    document.querySelector('.navbar-nav').classList.toggle('nav-active');
  });

  // shopping slider js 

  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.shopping-exp-slider', {
      loop: true,
      slidesPerView: 1,
      autoplay: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
    });
  });
  

  // discover slider js 

  var swiper2 = new Swiper(".discover-slider", {
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: ".discover-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".discover-button-next",
      prevEl: ".discover-button-prev",
    }
  });

  // review slider 

  document.addEventListener('DOMContentLoaded', function () {
    const swiper3 = new Swiper('.review-slider', {
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        }
      }
    });
  });
  

  // accordion js 

  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const isActive = header.classList.contains('active');

      // Close all open items
      document.querySelectorAll('.accordion-content').forEach(content => {
        content.style.display = 'none';
      });
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('active');
        h.querySelector('.accordion-icon').textContent = '+';
      });

      // If it was not active, open this one
      if (!isActive) {
        header.classList.add('active');
        header.nextElementSibling.style.display = 'block';
        header.querySelector('.accordion-icon').textContent = '−';
      }
    });
  });

