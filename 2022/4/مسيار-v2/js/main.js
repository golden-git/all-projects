$(function () {


  //  navbar scrolling settings
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 100) {
      $('.main-nav ').addClass('fixed-top shadow');

    } else {

      $('.main-nav ').removeClass('fixed-top shadow');

    }

  })

  $('.user-multi-img').on('click', function () {
    var img = $(this).data('img');
    $('#master-img').attr('src', img);

  })

  new CircleProgress('.progress-1', { max: 100, value: 60, textFormat: 'percent', });
  new CircleProgress('.progress-2', { max: 100, value: 20, textFormat: 'percent', });
  new CircleProgress('.progress-3', { max: 100, value: 100, textFormat: 'percent', });
  new CircleProgress('.progress-4', { max: 100, value: 0, textFormat: 'percent', });


});
