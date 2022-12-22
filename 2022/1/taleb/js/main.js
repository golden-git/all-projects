$(function () {

  // show menu in sm
  $(".show-menu").click(function (e) {
    $(".bottom-nav").toggleClass("menu-opn-to-bottom-nav");
    $("body").toggleClass("menu-opn-to-body");
  });

  // show courses filter
  $(".show-filter").click(function (e) {
    $(".courses aside").toggleClass("show-aside-filters");
    $("body").toggleClass("menu-opn-to-body");
  });

  // team slider rtl
  $(".team-slider-rtl").slick({
    infinite: true,
    dots: false,
    Arrow: false,
    rtl: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        Arrow: false,
      }
    },
    {
      breakpoint: 1458,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        Arrow: false,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        Arrow: false,

      }
    },
    {
      breakpoint: 528,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        Arrow: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        Arrow: false,
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
      $('.middle-nav ').addClass('fixed-top my-shadow');

    } else {

      $('.middle-nav ').removeClass('fixed-top my-shadow');

    }

  })


});
