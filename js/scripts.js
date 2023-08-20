/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});



document.addEventListener('DOMContentLoaded', () => {
  
    //===== MICRO-SLIDER begin
      const __ms = document.querySelector('.micro-slider');
    const __msSlider = new MicroSlider(__ms, { indicators: true, indicatorText: '' });
    const hammer = new Hammer(__ms);
      const __msTimer = 2000;
    let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
      
    //detect mouseenter event
      __ms.onmouseenter = function(e) {
      clearInterval(__msAutoplay); 
      console.log(e.type + ' mouse detected');
    }
    
    //detect mouseleave event
      __ms.onmouseleave = function(e) {
      clearInterval(__msAutoplay); 
      __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
      console.log(e.type + ' mouse detected');
    }
    
    //detect mouseclick event
      __ms.onclick = function(e) {
      clearInterval(__msAutoplay); 
      console.log(e.type + ' mouse detected');
    }
    
    //detect gesture tap event with hammer js library
    hammer.on('tap', function(e) {
      clearInterval(__msAutoplay);
      console.log(e.type + ' gesture detected');
    });
    
    //detect gesture swipe event with hammer js library
    hammer.on('swipe', function(e) {
      clearInterval(__msAutoplay); 
      __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
      console.log(e.type + ' gesture detected');
    });
  
    let slideLink = document.querySelectorAll('.slider-item');
    if (slideLink && slideLink !== null && slideLink.length > 0){
      slideLink.forEach( el => el.addEventListener('click', e => {
        e.preventDefault();
        let href = el.dataset.href;
        let target = el.dataset.target;
        if (href !== '#') window.open(href, target);
      }));
    }
    
    //===== MICRO-SLIDER end
    
  });



