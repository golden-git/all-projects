$(function () {

  $('#WAButton').floatingWhatsApp({
    //WhatsApp phone number International format
    phone: '+1234567890',
    // Popup Title
    headerTitle: 'راسنا عبر واتساب',
    // Popup Message
    popupMessage: 'مرحباً كيف نساعدك؟',
    showPopup: true,
    buttonImage: '<img width="50" src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />',
    position: "right"
  });


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
      breakpoint: 1900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1458,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,


      }
    },
    {
      breakpoint: 528,
      settings: {
        slidesToShow: 2,
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
