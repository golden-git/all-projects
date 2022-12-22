$(function () {


  // start AOS
  AOS.init();

  // clients-slider-rtl
  $(".clients-slider-rtl").slick({
    dots: false,
    infinite: true,
    Arrow: false,
    rtl: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1458,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
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

  //  navbar scrolling settings
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 100) {
      $('.main-navbar .navbar ').addClass('fixed-top py-2 shadow');
      $('.main-navbar .navbar ').removeClass('py-3 ');

    } else {

      $('.main-navbar .navbar ').removeClass('fixed-top py-2 shadow');
      $('.main-navbar .navbar ').addClass('py-3 ');


    }

  })

});
