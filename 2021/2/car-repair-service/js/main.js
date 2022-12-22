$(function () {

  $('.show-sidebar').on('click', function () {
    $('.sidebar').css('right', 0)
  });

  $('.close-sidebar').on('click', function () {
    $('.sidebar').css('right', -1000)
  });

  $(".vertical-center-2").slick({
    dots: false,
    infinite: true,
    arrows: false,
    // centerMode: true,
    rtl: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1880,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1458,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,


        }
      },
      {
        breakpoint: 528,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $(".vertical-center-1").slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,

  });

  $(".vertical-center-3").slick({
    dots: false,
    infinite: true,
    // arrows:true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,

  });

  // navbar scrolling settings
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 10) {
      $('.main-navbar ').addClass('fixed-top shadow ');

    } else {

      $('.main-navbar ').removeClass('fixed-top shadow ');

    }

  })
});