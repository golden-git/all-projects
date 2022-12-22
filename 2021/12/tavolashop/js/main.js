$(function () {

  $("#sameloc").change(function () {
    $(".otherlocation").toggle();
  });

  $(".show-pay").click(function () {
    $(".shoping").toggle();
    $(".pay").toggle();
  });
  $(".show-menu").click(function (e) {
    $(".bottom-nav").toggleClass("menu-opn-to-bottom-nav");
    $("body").toggleClass("menu-opn-to-body");
  });
  $(".show-filter").click(function (e) {
    $(".category aside").toggleClass("show-aside-filters");
    $("body").toggleClass("menu-opn-to-body");
  });

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



  // main slider
  $(".main-slider-lg").slick({
    dots: true,
    infinite: true,
    Arrow: true,
    rtl: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  });

  $(".main-slider-sm").slick({
    dots: false,
    infinite: true,
    Arrow: false,
    rtl: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  });

  // explore slider 1
  $(".explore-slider-1").slick({
    dots: false,
    infinite: true,
    Arrow: false,
    speed: 300,
    rtl: true,
    // dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1
        }
      }
    ]
  });

  // explore slider 2
  $(".explore-slider-2").slick({
    infinite: true,
    speed: 300,
    rtl: true,
    Arrow: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  function block_product_slider (sliderClass) {
    $(sliderClass).slick({
      infinite: true,
      rtl: true,
      Arrow: false,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  block_product_slider(".block-product-slider-1")
  block_product_slider(".block-product-slider-2")
  block_product_slider(".block-product-slider-3")


  $(".product-slider").slick({
    dots: false,
    infinite: true,
    Arrow: false,
    rtl: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
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
