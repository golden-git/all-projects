$(function () {

    $('.bd-example-modal-xl').on('shown.bs.modal', function (e) {

        $('.vertical-center-1').slick('setPosition');
          })
 
        
        $(".vertical-center-1").slick({
            dots: false,
            infinite: true,
            // arrows:false,
            centerMode: true,
            rtl:true,
            slidesToShow: 4,
            slidesToScroll: 3,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            responsive: [
                {
                  breakpoint: 1880,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                     dots: false,
                  }
                },
                {
                    breakpoint: 1458,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll:3,
                      infinite: true,
                       dots: false,
                    }
                  },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                    breakpoint: 528,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
          });
       
    $(".vertical-center-2").slick({
        dots: false,
        infinite: true,
        // arrows:false,
        centerMode: true,
        rtl:true,
        slidesToShow: 6,
        slidesToScroll: 3,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
              breakpoint: 1880,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                 dots: false,
              }
            },
            {
                breakpoint: 1458,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll:3,
                  infinite: true,
                   dots: false,
                }
              },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 528,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });

    $('.remove-box').click(function (e) { 
        e.preventDefault();
        $('.comparison-box').remove()
    });

    
    $('.show-comparison-box').click(function (e) { 
        e.preventDefault();
        $('.comparison-box').css('display', 'block')
    });



    $('.remove-media').click(function (e) { 
        e.preventDefault();
        $(this).parent().remove()
        // $('.comparison-box').remove()
    });


    $('[data-toggle="tooltip"]').tooltip()

    $('.product-multi-img').on('click', function () {
        var img = $(this).data('img');

        $('.product-multi-img').removeClass('img-border')
        $(this).addClass('img-border')
        // $('#master-img').seta('src') = img;
        $('#master-img').attr('src', './img/products/' + img);

    })
  
    $('.show-sidebar').on('click', function () {
        $('.sidebar').css('right', 0)
    });

    $('.close-sidebar').on('click', function () {
        $('.sidebar').css('right', -1000)
    });

})
 