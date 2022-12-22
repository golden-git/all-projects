$(function () {
  


  // start AOS
  AOS.init();
  
  // clients-slider-rtl
  $(".clients-slider-rtl").slick({
    dots: false,
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    rtl: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1880,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1458,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,


        }
      },
      {
        breakpoint: 528,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // clients-slider-ltr
  $(".clients-slider-ltr").slick({
    dots: false,
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1880,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1458,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,


        }
      },
      {
        breakpoint: 528,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
 
  // open search
  $('.open-search').click(function (e) { 
    $('.search-bar').css('display', 'block')
  });

   // close search
   $('.close-search').click(function (e) { 
    $('.search-bar').css('display', 'none')
  });

  // navbar scrolling settings
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 10) {
      $('.main-navbar .navbar ').addClass('fixed-top py-0 opacity-75 ');
      $('.main-navbar .navbar .navbar-brand .logo').addClass('small-logo');

    } else {

      $('.main-navbar .navbar ').removeClass('fixed-top py-0 opacity-75 ');
      $('.main-navbar .navbar .navbar-brand .logo').removeClass('small-logo');


    }

  })

  $('.small-img').click(function () { 
    $('.small-img').removeClass('active-img')
    $(this).addClass('active-img')
    $('.master-img').attr('src', './imgaes/products/'+$(this).attr('data-img'))
    
  });
});

// preloader
const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
	preloader.style.opacity -= 0.1;
	preloader.style.display = 'none';
	
	
  } else {
    clearInterval(fadeEffect);
  }
}, 200);

window.addEventListener('load', {fadeEffect});