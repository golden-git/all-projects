$(function () {


  $('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })
  
  $('.number-counter').counterUp({
    delay: 2,
    time: 1000
});


  // header slider
  $('.skitter-large').skitter({
    fullscreen: true,
    animation: 'fade',
    dots:false

  })
 
  // start AOS
  AOS.init();
 

  $('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })
     
});