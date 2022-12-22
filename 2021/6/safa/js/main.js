$(function () {

    var grad_view_toggle = $('.grad-view-toggle');

    $('.list-view-button').on('click', function () {
        grad_view_toggle.removeClass('grad-view')
    })

    $('.grid-view-button').on('click', function () {
        grad_view_toggle.addClass('grad-view')
    })

    $('.close-card').on('click', function () {
        $('.card').fadeToggle()
        $('body ').removeClass('overflow-hidden');
    })
    $('.show-card').on('click', function () {
        $('.card').fadeToggle()
        $('body').addClass('overflow-hidden');
    })

    $('.close-wishlist').on('click', function () {
        $('.wishlist').fadeToggle()
        $('body ').removeClass('overflow-hidden');
    })
    $('.show-wishlist').on('click', function () {
        $('.wishlist').fadeToggle()
        $('body').addClass('overflow-hidden');
    })

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
    /*

        Init AOS

    */
    AOS.init();


    $('.add-to-card').click(function () {
        $('.card-counter').html(function (i, val) {
            return val * 1 + 1
        });
    });

    // hide #back-top first


    // FamProductsSlider
    FamProductsSlider();

    function FamProductsSlider () {
        if ($('.fam_tab_slider').length) {
            var slider1 = $('.fam_tab_slider');

            slider1.owlCarousel({
                loop: true,
                rtl: true,
                //    center:true,
                dots: false,
                nav: false,
                autoplay: true,
                // autoplaySpeed:.5,
                margin: 10,
                stagePadding: 5,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    991: {
                        items: 3
                    },
                    1280: {
                        items: 4
                    },
                    1440: {
                        items: 4
                    }
                }
            });

            if ($('.fam_tab_slider_nav_right').length) {
                $('.fam_tab_slider_nav_right').on('click', function () {
                    slider1.trigger('prev.owl.carousel');
                });
            }

            if ($('.fam_tab_slider_nav_left').length) {
                $('.fam_tab_slider_nav_left').on('click', function () {
                    slider1.trigger('next.owl.carousel');
                });
            }
        }
    }



    // navbar scrolling settings
    // $(window).on('scroll', function () {

    //     if ($(window).scrollTop() > 100) {
    //         $('.main-navbar ').removeClass('position-relative');
    //         $('.main-navbar').addClass('fixed-top');
    //         $('body').css('padding-top', $('.main-navbar').innerHeight());


    //     } else {

    //         $('.main-navbar ').removeClass('fixed-top    ');
    //         $('.main-navbar ').addClass('position-relative');

    //         $('body').css('padding-top', 0);

    //     }

    // })

    if ($(window).innerWidth() < 1199) {
        $('#collapsefilter').collapse('hide')

    }

    // Enable tooltip
    $('[data-toggle="tooltip"]').tooltip()


    $('.product-multi-img').on('click', function () {
        var img = $(this).data('img');

        $('.product-multi-img').removeClass('img-border')
        $(this).addClass('img-border')
        // $('#master-img').seta('src') = img;
        $('#master-img').attr('src', './images/products/' + img);

    })

    $('.product-img-newsrc').on('click', function () {
        var img = $(this).data('newsrc');
        $(this).parentsUntil('.single-product').siblings('.imgae').find('a').find('.product-img').attr('src', img)
    })

    $('.product-img-newsrc').on('mouseover  ', function () {
        var img = $(this).data('newsrc');
        $(this).parentsUntil('.single-product').siblings('.imgae').find('a').find('.product-img').attr('src', img)
    })


    $('.card-multi-img').on('click', function () {

        $('.card-multi-img').removeClass('img-border')
        $(this).addClass('img-border')

    })


})

$(window).on('load', function () {
    $('.contentloading').removeClass('contentloading')
    $('.contentloading-spinner').remove()
});



$("#scroll-top").hide();
// fade in #back-top
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#scroll-top i').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});

