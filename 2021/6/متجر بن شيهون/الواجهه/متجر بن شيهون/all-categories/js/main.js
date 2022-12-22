$(function () {

  $('.togler').on('click', function () {
    $(this).next('.col-content').fadeToggle()
    $(this).find('i').toggleClass('fa-angle-down fa-angle-right')
  })

  // Custom carousel nav
  $('header .prev').click(function () { $('.header-slider').slick('slickPrev') })
  $('header .next').click(function () { $('.header-slider').slick('slickNext') })
  // header-slider
  $(".header-slider").slick({
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: true,
    rtl: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,

  });
  // Custom carousel nav
  $('.products .prev').click(function () { $('.products-slider').slick('slickPrev') })
  $('.products .next').click(function () { $('.products-slider').slick('slickNext') })
  // products-slider
  $(".products-slider").slick({
    dots: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    rtl: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1458,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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


});
