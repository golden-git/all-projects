$(function () {


  //  navbar scrolling settings
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 100) {
      $('.middle-nav ').addClass('fixed-top my-shadow');

    } else {

      $('.middle-nav ').removeClass('fixed-top my-shadow');

    }

  })


});
