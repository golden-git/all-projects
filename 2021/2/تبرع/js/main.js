$(document).ready(function(){
  AOS.init();

  $('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })
  
  $('[data-toggle="tooltip"]').tooltip()
  
  $('.add-to-card').click(function() {
    $('.card-counter').html(function(i, val) { return val*1+1 });
});
  });
  