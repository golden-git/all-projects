$(function () {

  $('.close-card').on('click', function () {
    $('.card').fadeToggle()
  })
  $('.show-card').on('click', function () {
    $('.card').fadeToggle()
  })


  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // start AOS
  AOS.init();
  // header-slider-rtl
  $(".header-slider-rtl").slick({
    dots: false,
    infinite: true,
    arrows: false,
    rtl: true,
    slidesToShow: 1,
    autoplay: true,
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  })
  // Custom carousel nav
  $('.header-slider .prev').click(function () { $('.header-slider-rtl').slick('slickPrev') })
  $('.header-slider .next').click(function () { $('.header-slider-rtl').slick('slickNext') })
  // dis-slider-rtl
  $(".dis-slider-rtl").slick({
    dots: false,
    // arrows: false,
    rtl: true,
    slidesToShow: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToScroll: 1,
  })
  // Custom carousel nav
  $('.dis-slider .prev').click(function () { $('.dis-slider-rtl').slick('slickPrev') })
  $('.dis-slider .next').click(function () { $('.dis-slider-rtl').slick('slickNext') })
  // product-slider-1
  $(".product-slider-1").slick({
    dots: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    rtl: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 2000,
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
        slidesToShow: 3,
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
    ]
  });
  // Custom carousel nav
  $('.product-1 .prev').click(function () { $('.product-slider-1').slick('slickPrev') })
  $('.product-1 .next').click(function () { $('.product-slider-1').slick('slickNext') })

  $(".product-slider-3").slick({
    dots: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    rtl: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 2000,
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
        slidesToShow: 3,
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
    ]
  });
  // Custom carousel nav
  $('.product-3 .prev').click(function () { $('.product-slider-3').slick('slickPrev') })
  $('.product-3 .next').click(function () { $('.product-slider-3').slick('slickNext') })

  $('header input').on('focus', function () {
    $(this).next('img').css({
      'bottom': '0',
      'left': '0',
    })
  })
  $('header input').on('blur', function () {
    $(this).next('img').css({
      'bottom': '-8px',
      'left': '8px',
    })
  })

  //  navbar scrolling settings
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 100) {
      $('.main-navbar .navbar ').addClass('py-2 shadow m-color-bg');
      $('.main-navbar .navbar ').removeClass('py-3 bg-transparent');

    } else {

      $('.main-navbar .navbar ').removeClass('py-2 shadow m-color-bg');
      $('.main-navbar .navbar ').addClass('py-3 bg-transparent');


    }

  })

});
