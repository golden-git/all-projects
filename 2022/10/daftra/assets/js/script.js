$(document).ready(function() {
    
    $(window).scroll(function(){
        headerFixed(50);
        // scrollTop();
    });

    // check header when load page
    headerFixed(0);

    // show/hide scroll top Button
    function scrollTop() {
        if($(this).scrollTop() > 400) {
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    }

    // click on scroll top button
    $('.scrollTop').on('click',function() {
        $("html,body").animate({
            scrollTop: 0
        }, 800)
    });

    function headerFixed(value) {
        if($(this).scrollTop() > value) {
            $('header').addClass('fixed');
            $('.header-fixed').addClass('pd');
        } else {
            $('header').removeClass('fixed')
            $('.header-fixed').removeClass('pd');
        }
    }

    // Hide Show Mega Menu
    $('.bars-icon a, .open-modules').on('click', function() {
        $('.mega-menu').addClass('open');
        $('body').css('overflow-y', 'hidden')
    });

    $('.mega-menu .close-icon').on('click', function() {
        $('.mega-menu').removeClass('open');
        $('body').css('overflow-y', 'auto');
    });

    if($(window).width() < 991) {
        $('.mega-menu .close-icon').on('click', function() {
            $('.mega-menu .left-side').hide();
            $('.mega-menu .right-side').show();
        });
        // Show & hide Left Side - Right Side in Modules Menu [ Mobile View ]
        $('.show-modules-menu').on('click', function() {
            $('.mega-menu .left-side').show();
            $('.mega-menu .right-side').hide();
        })
    }
    
    // Hide Show Industry Menu
    $(".industry-menu-link").on('click', function() {
        $('.industry-menu').addClass('open');
        $('body').css('overflow-y', 'hidden');
    });

    // if url has query stting industries on
    if(location.search.includes('industry=on')) {
        $('.industry-menu').addClass('open');
        $('body').css('overflow-y', 'hidden');
    }

    if(location.search.includes('modules=on')) {
        $('.mega-menu').addClass('open');
        $('body').css('overflow-y', 'hidden')
    }

    $('.industry-menu .close-icon, .industry-menu .menu__layer > div').on('click', function() {
        $('.industry-menu').removeClass('open')
        $('body').css('overflow-y', 'auto');
    });

    // Make Ripple Effect
    function addRippleHover(ele) {
        let btnText = $(ele).html();
        let elem = $(ele);
        let htmlContent = "<span class='btn-content hover-effect-text'>" + btnText + "</span><span class='btn-ripple'></span>"
        elem.addClass('btn-shadow btn-hover-translate btn-hover-ripple translate-effect hover-effect')
        elem.text("");
        elem.append(htmlContent);
    }

    let selectors = ['.main-btn', '.sub-btn', '.free-btn', '.start-plan-btn', '.l-btn']
    selectors.map((selector) => { $(selector).each( (i, ele) => addRippleHover(ele)) })
    
    $(document)
        .on('mouseenter', '.btn-hover-ripple', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('.btn-ripple').css({top:relY, left:relX})
        })
        .on('mouseout', '.btn-hover-ripple', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('.btn-ripple').css({top:relY, left:relX})
        });

    // dropbtn 
    let dropbtn = document.querySelector('.menu-item-dropdown .dropbtn');
    function applyClick() {
        document.getElementById("myDropdown").classList.toggle("show-drop-btn");
    }
    if(dropbtn) {
        dropbtn.addEventListener('click', applyClick);
    }

    window.onclick = function(event) {
        let drop = document.getElementById("myDropdown");
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn-icon')  ) {
            if(drop) {
                document.getElementById("myDropdown").classList.remove('show-drop-btn');
            }
        }
    }

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        rtl: $('html').attr('dir') == 'rtl' ? 'rtl': 'ltr',
        responsive:{
            0:{
                items:2
            },
            320: {
                items: 3
            },
            600:{
                items:4
            },            
            960:{
                items:6
            },
            1200:{
                items:8
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    $(".bt-menu-trigger").click(function() {
		$(".main-nav").toggle()
		$(".bt-menu").toggleClass('bt-menu-open')
		return false;
 	 });

    //   Sort Table

	function sortTable(f,n){
        var rows = $('.result-table tbody  tr').get();

        rows.sort(function(a, b) {
            var A = $(a).children('td').eq(n).text().toUpperCase();
            var B = $(b).children('td').eq(n).text().toUpperCase();

            if(A < B) {
                return -1*f;
            }
            if(A > B) {
                return 1*f;
            }
            return 0;
        });

        $.each(rows, function(index, row) {
            $('.result-table').children('tbody').append(row);
        });
    }
    var f_sl = 1,
        f_nm = 1,
        f_ad = 1,
        f_ph = 1;
    $("#gs1-cl1").click(function(){
        f_sl *= -1;
        var n = $(this).prevAll().length;
        sortTable(f_sl,n);
    });
    $("#gs1-cl2").click(function(){
        f_nm *= -1;
        var n = $(this).prevAll().length;
        sortTable(f_nm,n);
    });
    $("#gs1-cl3").click(function(){
        f_ad *= -1;
        var n = $(this).prevAll().length;
        sortTable(f_ad,n);
    });
    $("#gs1-cl4").click(function(){
        f_ph *= -1;
        var n = $(this).prevAll().length;
        sortTable(f_ph,n);
    });
    


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            "@1.00": {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            "@1.50": {
                slidesPerView: 2,
                spaceBetween: 50,
            },
        },
    });
})