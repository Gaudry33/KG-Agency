

// FAQ

const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

// ANIMATIONS IMAGES SLIDERS

      ScrollReveal({
        //reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
      });

      //target elements, and specify options to create reveal animations
      ScrollReveal().reveal('.argent, .buisness, .gerant', { delay: 500, origin: 'left' });
      ScrollReveal().reveal('.mym, .time, .profitez, .pourquoi, .andrew, .merci', { delay: 200, origin: 'bottom' });
      ScrollReveal().reveal('.text-iphone, .of, .unique', { delay: 400, origin: 'right' });
      ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
      ScrollReveal().reveal('.vision', { delay: 200, origin: 'top' });
      ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });

// NAVIGATIONS MENTIONS LEGALES

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      const header = document.querySelector('.navigations-legal');
      
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
});

// NAVIGATIONS ACCUEIL

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      const header = document.querySelector('.navigations, .navigations-contact');
      
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
});















