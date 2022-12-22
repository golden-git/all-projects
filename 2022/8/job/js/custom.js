/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	

//  selectpicker function by = bootstrap-select.min.js ========================== //
	function select_picker_select(){
		jQuery('.my-select').selectpicker();
	}

//  Home 1 Banner Carousel function by = owl.carousel.js ========================== //
	function twm_h1_bnr_carousal(){
		jQuery('.twm-h1-bnr-carousal').owlCarousel({
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			items: 1,
			loop: true,
			rtl: true,
			nav:false,
			dots: false,
			autoplay:true,
			autoplayHoverPause:false,
			touchDrag  : false,
			mouseDrag  : false,
		});
	}

//  Job Categories Carousel function by = owl.carousel.js ========================== //
	function job_categories_carousel(){
		jQuery('.job-categories-carousel').owlCarousel({
			loop:true,
			rtl: true,
			nav:true,
			dots: false,
			center:false,				
			margin:30,
			autoplay:true,
			navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:1,
				},			
				767:{
					items:2,
					margin:0,
				},
				991:{
					items:2,
					
				},
				1024:{
					items:3
				}
			}
		});
	}

// > Video responsive function by = custom.js ========================= //	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  

// > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
 	function lightbox_popup(){
        lc_lightbox('.elem', {
            wrap_class: 'lcl_fade_oc',
            gallery : true,	
            thumb_attr: 'data-lcl-thumb', 
            
            skin: 'minimal',
            radius: 0,
            padding	: 0,
            border_w: 0,
        });
	}			

// > magnificPopup for video function	by = magnific-popup.js ===================== //	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}

// Vertically center Bootstrap modal popup function by = custom.js ==============//
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}

// > Main menu sticky on top  when scroll down function by = custom.js ========== //		
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
			  element: jQuery('.sticky-header')
			});
		}
	}

// > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
	function sticky_sidebar(){		
		$('.rightSidebar')
			.theiaStickySidebar({
				additionalMarginTop: 100
			});		
	}

// > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}
	
// > input type file function by = custom.js ========================== //	 	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}

// > input Placeholder in IE9 function by = custom.js ======================== //	
	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	

	// > Nav submenu show hide on mobile by = custom.js
	function mobile_nav(){
		jQuery(".sub-menu").parent('li').addClass('has-child');
		jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

			jQuery(this).parent().siblings(".has-child ").children(".sub-menu").slideUp(500, function(){
				jQuery(this).parent().removeClass('nav-active');
			});

			jQuery(this).next(jQuery('.sub-menu')).slideToggle(500, function(){
				jQuery(this).parent().toggleClass('nav-active');
			});

			ev.stopPropagation();
		});
	
	}
	 
	// Mobile side drawer function by = custom.js
	function mobile_side_drawer(){
		jQuery('#mobile-side-drawer').on('click', function () { 
			jQuery('.mobile-sider-drawer-menu').toggleClass('active');
		});
	}	
	
//  > Top Search bar Show Hide function by = custom.js =================== //	

	function site_search(){
		jQuery('a[href="#search"]').on('click', function(event) {                    
		jQuery('#search').addClass('open');
		jQuery('#search > form > input[type="search"]').focus();
	});
				
	jQuery('#search, #search button.close').on('click keyup', function(event) {
		if (event.target === this || event.target.className === 'close') {
			jQuery(this).removeClass('open');
		}
	});  
 	}	

//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel(){
	jQuery('.home-client-carousel').owlCarousel({
		loop:true,
		nav:false,
		dots: true,				
		rtl: true,
		margin:5,
		autoplay:true,
		navText: [ '<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			},			
			767:{
				items:4,
			},
			1000:{
				items:4
			}
		}
	});
	}

	//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel_2(){
		jQuery('.home-client-carousel2').owlCarousel({
			loop:true,
			nav:true,
			dots: false,		
			rtl: true,
			margin:30,
			autoplay:true,
			navText: [ '<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
			responsive:{
				0:{
					items:2,
				},
				480:{
					items:3,
				},			
				767:{
					items:4,
				},
				1000:{
					items:6
				}
			}
		});
	}

	//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel_3(){
		jQuery('.home-client-carousel3').owlCarousel({
			loop:true,
			nav:false,
			rtl: true,
			dots: false,				
			margin:30,
			autoplay:true,
			autoplayTimeout: 1500,
			navText: [ '<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
			responsive:{
				0:{
					items:2,
				},
				480:{
					items:3,
				},			
				767:{
					items:4,
				},
				1000:{
					items:5
				}
			}
		});
	}

	//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel_4(){
		jQuery('.home-client-carousel4').owlCarousel({
			loop:true,
			nav:false,
			dots: false,				
			margin:0,
			rtl: true,
			autoplay:true,
			autoplayTimeout: 1500,
			navText: [ '<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
			responsive:{
				0:{
					items:2,
				},
				480:{
					items:3,
				},			
				767:{
					items:4,
				},
				1000:{
					items:5
				}
			}
		});
	}

	//  Trusted logo Carousel function by = owl.carousel.js ========================== //
	function trusted_logo(){
		jQuery('.trusted-logo').owlCarousel({
			loop:true,
			nav:false,
			rtl: true,
			dots: false,				
			margin:5,
			autoplay:true,
			navText: [ '<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:2,
				},			
				767:{
					items:3,
				},
				991:{
					items:3
				}
			}
		});
	}

	//  Testimonial Carousel function by = owl.carousel.js ========================== //
	function twm_testimonial_1_carousel(){
		jQuery('.twm-testimonial-1-carousel').owlCarousel({
			loop:true,
			nav:true,
			rtl: true,
			dots: false,				
			margin:30,
			autoplay:true,
			navText: [ '<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:1,
				},			
				991:{
					items:2,
				}

			}
		});
	}
	
	//  Testimonial Carousel function by = owl.carousel.js ========================== //
	function twm_testimonial_2_carousel(){
		jQuery('.twm-testimonial-2-carousel').owlCarousel({
			loop:true,
			nav:true,
			rtl: true,
			dots: false,				
			margin:5,
			autoplay:true,
			navText: [ '<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:1,
				},			
				991:{
					items:2,
				},
				1199:{
					items:3,
				}

			}
		});
	}

	//  Counter Section function by = counterup.min.js
	function counter_section(){
		jQuery('.counter').counterUp({
			delay: 10,
			time: 3000
		});	
	}	

		
	// sidebarCollapse function by = custom.js
	function msg_user_list_slide(){
		jQuery('.user-msg-list-btn-open, .user-msg-list-btn-close').on('click', function () { 
			jQuery('.wt-admin-dashboard-msg-2').toggleClass('active');
		});
	}		

	// sidebarCollapse function by = custom.js
	function sidebarCollapse(){
		jQuery('#sidebarCollapse').on('click', function () { 
			jQuery('#header-admin, #sidebar-admin-wraper, #content').toggleClass('active');
		});
	}

	// dashboard Notification function by = custom.js
	function dashboard_noti_dropdown(){
		jQuery('.dashboard-noti-dropdown').on('click', function () { 
			jQuery('.dashboard-noti-panel').toggleClass('active');
		});
	}	
	
	// dashboard Message function by = custom.js
	function dashboard_message_dropdown(){
		jQuery('.dashboard-message-dropdown').on('click', function () { 
			jQuery('.dashboard-message-panel').toggleClass('active');
		});
	}			

	// CustomScrollbar function by = jquery.scrollbar.js
	function scroll_bar_custome(){	
		jQuery('.scrollbar-macosx').scrollbar();
	}


	// Jobs Bookmark table function by = dataTables.bootstrap5.js
    function jobs_bookmark_table(){
        jQuery('#jobs_bookmark_table').DataTable(
            {     
                "aLengthMenu": [[3, 5, 10, -1], [3, 5, 10, "All"]],
                "iDisplayLength": 3
            } 
        );
    }
	
	// candidate_data_table function by = dataTables.bootstrap5.js
    function candidate_data_table(){
        jQuery('#candidate_data_table').DataTable(
            {     
                "aLengthMenu": [[5, 8, 10, -1], [5, 8, 10, "All"]],
                    "iDisplayLength": 5
                } 
            );

		function checkAll(bx) {
			var cbs = document.getElementsByTagName('input');
			for(var i=0; i < cbs.length; i++) {
				if(cbs[i].type == 'checkbox') {
				cbs[i].checked = bx.checked;
				}
			}
    	}
	}
 
 

/*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	// > masonry function function by = isotope.pkgd.min.js ========================= //	

	function masonryBox() {
		if ( jQuery().isotope ) {      
			var $container = jQuery('.masonry-wrap');
				$container.isotope({
					itemSelector: '.masonry-item',
					transitionDuration: '1s',
					originLeft: true,
					stamp: '.stamp',
				});

			$container.imagesLoaded().progress( function() {
				$container.isotope('layout');
			});

			jQuery('.masonry-filter li').on('click',function() {                           
				var selector = jQuery(this).find("a").attr('data-filter');
				jQuery('.masonry-filter li').removeClass('active');
				jQuery(this).addClass('active');
				$container.isotope({ filter: selector });
				return false;
			});
		};
	}
	

// > page loader function by = custom.js ========================= //		
	function page_loader() {
		$('.loading-area').fadeOut(1000);
	}

/*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    }
	

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
		//  selectpicker function by = bootstrap-select.min.js ========================== //
	    select_picker_select(),
		//  Home 1 Banner Carousel function by = owl.carousel.js ========================== //
	    twm_h1_bnr_carousal(),
		//  Job Categories Carousel function by = owl.carousel.js ========================== //
	    job_categories_carousel(),
		// > Top Search bar Show Hide function by = custom.js  		
		site_search(),	
		// > Video responsive function by = custom.js 
		video_responsive(),
		 // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
		lightbox_popup(),
		// > magnificPopup for video function	by = magnific-popup.js
		magnific_video(),
		// > Vertically center Bootstrap modal popup function by = custom.js
		popup_vertical_center();
		// > Main menu sticky on top  when scroll down function by = custom.js		
		sticky_header(),
	    // > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
		sticky_sidebar(),
		// > page scroll top on button click function by = custom.js	
		scroll_top(),
		// > input type file function by = custom.js	 	
		input_type_file_form(),
		// > input Placeholder in IE9 function by = custom.js		
		placeholderSupport(),
		// > Nav submenu on off function by = custome.js ===================//
		mobile_nav(),
		// Mobile side drawer function by = custom.js
		mobile_side_drawer(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
		home_client_carousel(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
	    home_client_carousel_2(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
	    home_client_carousel_3(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
	    home_client_carousel_4(),
		//  Trusted logo Carousel function by = owl.carousel.js ========================== //
		trusted_logo(),
		//  Testimonial Carousel function by = owl.carousel.js ========================== //
	    twm_testimonial_1_carousel(),
		//  Testimonial Carousel function by = owl.carousel.js ========================== //
	    twm_testimonial_2_carousel(),
		//  Counter Section function by = counterup.min.js ========================== //
		counter_section(),
		//massage user list show hide function by = custom.js	 ========================== //
		msg_user_list_slide(),
		// sidebarCollapse function by = custom.js
		sidebarCollapse(),
		// dashboard Notification function by = custom.js
	    dashboard_noti_dropdown(),	
		// dashboard Message function by = custom.js
		dashboard_message_dropdown(),
		// CustomScrollbar function by = jquery.scrollbar.js	
		scroll_bar_custome()
		 
		 
			
	}); 	

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
jQuery(window).on('load', function () {
	// > masonry function function by = isotope.pkgd.min.js		
	masonryBox(),
	// > page loader function by = custom.js		
	page_loader();
});

 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

jQuery(window).on('scroll', function () {
// > Window on scroll header color fill 
	color_fill_header();
});
	 
	
})(window.jQuery);