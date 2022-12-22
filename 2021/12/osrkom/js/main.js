$(function () {
  $('#pills-tab span').on('shown.bs.tab', function(){
    $("#pills-month").update();
  });

  // show search data
  $(".search-container input[type='text']").keyup(function () {
    if ($(this).val()) {
      $(".search-data-container").css("display", "block")
    } else {
      $(".search-data-container").css("display", "none")
    }
  });

  // add option
  $(".add-option").on('click', function () {
    var ele = $(this).prev('.options-element-1').clone(true);
    $(this).next('.options-container').append(ele);
  })

  // toggle dashboard sidebar
  $(".show-dashboard-sidebar").click(function () {
    $(".dashboard-body").addClass('mr-228');
    // $(".dashboard-body").animate({ "margin-right": '228px' }, 500);
    $(".dashboard-sidebar").animate({ "opacity": '1' }, 500);
    $(".dashboard-sidebar").css({ "z-index": '3' }, 500);
    $(this).toggle()
    $(".hide-dashboard-sidebar").toggle()
  })
  
  // toggle dashboard sidebar
  $(".hide-dashboard-sidebar").click(function () {
    $(".dashboard-body").removeClass('mr-228');
    $(".dashboard-sidebar").css({ "z-index": '1' }, 500);
    $(".dashboard-sidebar").animate({ "opacity": '0' }, 500);
    // $(".dashboard-body").animate({ "margin-right": '0' }, 500);
    $(this).toggle()
    $(".show-dashboard-sidebar").toggle()
  })

  // chat player
  const players = Plyr.setup('.player', {
    settings: [],
  });

  // filter price input value
  $("#price").change(function () {
    var fileName = $(this).val()
    console.log(fileName);
    $(".price-val").text(fileName)

  });

  // dashboard product slider
  $('.dashboard-product-slider').slick({
    dots: true,
    infinite: true,
    rtl: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1
  });

  // customer home header slider
  $('.customer-home-header').slick({
    dots: false,
    infinite: true,
    rtl: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // categories slider
  $('.categories-slider').slick({
    dots: false,
    infinite: true,
    rtl: true,
    slidesToShow: 9,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // show auth input value
  $(".input-file input[type='file']").change(function () {
    var fileName = $(this).val().slice(12, -1)
    var icon = $(".auth .input-file div i")
    $(this).next().find('.file-name').css('display', 'inline',)
    $(this).next().find('.input-label').css('display', 'none',)
    $(this).next().find('.file-name').text(fileName)
    icon.removeClass('mbi-plus');
    icon.addClass('mbi-check');
    icon.css({
      'background-color': '#198754',
      'color': '#fff',
      'border': '1px solid #198754'
    })
  });

  // password toggle
  $(".show-password").click(function () {
    if ($(this).next('input').val() != "") {
      if ($(this).next('input').attr("type") == "password") {
        $(this).next('input').attr("type", "text")
        $(this).removeClass('mbi-eye');
        $(this).addClass('mbi-eye-crossed');
      } else {
        $(this).next('input').attr("type", "password")
        $(this).addClass('mbi-eye');
        $(this).removeClass('mbi-eye-crossed');
      }

    }
  });

  // toggle sidebar
  $(".toggle-frontend-sidebar").click(function () {
    $(".front-sidebar-container").toggleClass("front-sidebar-open")
    $("body").toggleClass("body-overflow")
  })

  // .toogle-user-info
  $(".toogle-user-info").click(function () {
    $(".user-inf").toggle()
  })

  // toggle cart
  $(".cart-toggle").click(function () {
    $(".card-content").toggle()
  })

  // toggle message
  $(".message-toggle").click(function () {
    $(".message-content").toggle()
  })

  // navbar scrolling settings
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('.home-navbar ').addClass('bg-white shadow-sm');
      $(".home-navbar img").attr('src', './images/logo1.png');
      $(".home-navbar .nav-links .login, .home-navbar .nav-links .lang")
        .css({ "background-color": "#FFC40D", "color": "#fff" });
    } else {
      $(".home-navbar img").attr('src', './images/logo2.png');
      $('.home-navbar ').removeClass('bg-white shadow-sm');
      $(".home-navbar .nav-links .login, .home-navbar .nav-links .lang")
        .css({ "background-color": "#fff", "color": "#222" });
    }

  })

  // input minus and plus count
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    console.log(count)
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    var count = $input.val(parseInt($input.val()) + 1);
    $input.change();
    console.log($input.val())
    return false;
  });

  // AOS init
  AOS.init();

  // intlTelInput init
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    separateDialCode: true,
  });
});
