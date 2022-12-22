$(function () {
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
    $('.set').on('shown.bs.tab', function (e) {
        $('.product-slider-1').slick('setPosition');
        $('.product-slider-2').slick('setPosition');
        $('.product-slider-3').slick('setPosition');
    })
    // Custom carousel nav
    $('.product .prev').click(function () { $('.product-slider-1').slick('slickPrev') })
    $('.product .next').click(function () { $('.product-slider-1').slick('slickNext') })
    $(".product-slider-1").slick({
        dots: false,
        // arrows: false,
        infinite: true,
        rtl: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        // mobileFirst: true,
        // centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 868,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 476,
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

    // $('.product-2 .prev').click(function () { $('.product-slider-2').slick('slickPrev') })
    // $('.product-2 .next').click(function () { $('.product-slider-2').slick('slickNext') })
    $(".product-slider-2").slick({
        dots: false,
        // arrows: false,
        rtl: true,
        infinite: true,
        // mobileFirst: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 868,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 476,
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

    // Custom carousel nav
    $('.product-fet .prevfet').click(function () { $('.product-slider-3').slick('slickPrev') })
    $('.product-fet .nextfet').click(function () { $('.product-slider-3').slick('slickNext') })
    $(".product-slider-3").slick({
        dots: false,
        // arrows: false,
        infinite: true,
        rtl: true,
        prevArrow: $('.prevfet'),
        nextArrow: $('.nextfet'),
        // mobileFirst: true,
        // centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 868,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 476,
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

    /*

        Init AOS

    */
    AOS.init();



})
