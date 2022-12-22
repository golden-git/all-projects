$(function(){
	'use strict'
	 
 
 
    $(window).on('scroll' , function () {
       
    if ($(window).scrollTop() > 10) {
	  
    } else {
      
    }

    })


     // TopProductsSlider
     TopProductsSlider();

     function TopProductsSlider() {
         if ($('.header_products_slider').length) {
             var slider1 = $('.header_products_slider');
 
             slider1.owlCarousel({
                 loop: true,
                 rtl: true,
                 //    center:true,
                 dots: false,
                 nav: false,
                //  autoplay: true,
                 // autoplaySpeed:.5,
                 margin: 0,
                 stagePadding: 0,
                 responsive: {
                     0: {
                         items: 1
                     },
                     480: {
                         items: 2
                     },
                     768: {
                         items: 3
                     },
                     991: {
                         items: 3
                     },
                     1280: {
                         items: 4
                     },
                     1440: {
                         items: 5
                     }
                 }
             });
 
             
             $('.header_products_slider_nav_right').click(function() {
                slider1.trigger('prev.owl.carousel');
            })
 
             
             $('.header_products_slider_nav_left').click(function() {
                slider1.trigger('next.owl.carousel');
            })
         }
     }
 
  
})






