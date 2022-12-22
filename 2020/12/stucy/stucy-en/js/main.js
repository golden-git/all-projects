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

  })

  // about slider
  $('.home .skitter-about').skitter() 

  $(".home .portfolio1").slick({
    dots: true,
    arrows: false,
    infinite: true,
    // mobileFirst: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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

  $(".home .portfolio2").slick({
    dots: true,
    arrows: false,
    infinite: true,
    // mobileFirst: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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

  $(".home .portfolio3").slick({
    dots: true,
    arrows: false,
    infinite: true,
    // mobileFirst: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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

  $(".home .portfolio4").slick({
    dots: true,
    arrows: false,
    infinite: true,
    // mobileFirst: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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


  $(".portfolio .home .portfolio11").slick({
    dots: true,
    arrows: false,
    infinite: true,
    // mobileFirst: true,
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

  $(".portfolio .home .portfolio21").slick({
    dots: true,
    arrows: false,
    infinite: true,
    // mobileFirst: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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

  $(".portfolio .home .portfolio31").slick({
    dots: true,
    arrows: false,
    infinite: true,
    // mobileFirst: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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

  $(".portfolio .home .portfolio41").slick({
    dots: true,
    arrows: false,
    infinite: true,
    // mobileFirst: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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

  $(".services .portfolio111").slick({
    dots: true,
    arrows: false,
    infinite: true,
    // mobileFirst: true,
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



  $(".home .clientsslider").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    centerMode: true,
    autoplaySpeed: 4000,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });

  $(".about .team-slider").slick({
    dots: false,
    infinite: true,
    // arrows: true,
    slidesToScroll: 1,
    centerMode: true,
  centerPadding: '1px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '1px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '1px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '1px',
        slidesToShow: 1
      }
    }
  ]
  });

  
  
  // start AOS
  AOS.init();

  // navbar scrolling settings
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 10) {
      $('.main-navbar ').addClass('dark-light-color-bg');
      $('.main-navbar ').removeClass('bg-transparent');

    } else {

      $('.main-navbar ').removeClass('dark-light-color-bg');
      $('.main-navbar ').addClass('bg-transparent');

    }

  })


  
	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var topNav = $('.top_nav')
	var mainSlider = $('.main_slider');
	var hamburger = $('.hamburger_container');
	var menu = $('.hamburger_menu');
	var menuActive = false;
	var hamburgerClose = $('.hamburger_close');
	var fsOverlay = $('.fs_menu_overlay');

	setHeader();

	$(window).on('resize', function()
	{
		initFixProductBorder();
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initFavorite();
	initFixProductBorder();
	initIsotopeFiltering();
	initPriceSlider();
	initCheckboxes();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'top':"0"});
			}
			else
			{
				header.css({'top':"0"});
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'top':"-50px"});
			}
			else
			{
				header.css({'top':"0"});
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if(hamburger.length)
		{
			hamburger.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
			});
		}

		if(fsOverlay.length)
		{
			fsOverlay.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if(hamburgerClose.length)
		{
			hamburgerClose.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if($('.menu_item').length)
		{
			var items = document.getElementsByClassName('menu_item');
			var i;

			for(i = 0; i < items.length; i++)
			{
				if(items[i].classList.contains("has-children"))
				{
					items[i].onclick = function()
					{
						this.classList.toggle("active");
						var panel = this.children[1];
					    if(panel.style.maxHeight)
					    {
					    	panel.style.maxHeight = null;
					    }
					    else
					    {
					    	panel.style.maxHeight = panel.scrollHeight + "px";
					    }
					}
				}	
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		// menu.css('right', "0");
		fsOverlay.css('pointer-events', "auto");
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		fsOverlay.css('pointer-events', "none");
		menuActive = false;
	}

	/* 

	4. Init Favorite

	*/

    function initFavorite()
    {
    	if($('.favorite').length)
    	{
    		var favs = $('.favorite');

    		favs.each(function()
    		{
    			var fav = $(this);
    			var active = false;
    			if(fav.hasClass('active'))
    			{
    				active = true;
    			}

    			fav.on('click', function()
    			{
    				if(active)
    				{
    					fav.removeClass('active');
    					active = false;
    				}
    				else
    				{
    					fav.addClass('active');
    					active = true;
    				}
    			});
    		});
    	}
    }

    /* 

	5. Init Fix Product Border

	*/

    function initFixProductBorder()
    {
    	if($('.product_filter').length)
    	{
			var products = $('.product_filter:visible');
    		var wdth = window.innerWidth;

    		// reset border
    		products.each(function()
    		{
    			$(this).css('border-right', 'solid 1px #e9e9e9');
    		});

    		// if window width is 991px or less

    		if(wdth < 480)
			{
				for(var i = 0; i < products.length; i++)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

    		else if(wdth < 576)
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 1; i < products.length; i+=2)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

    		else if(wdth < 768)
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 2; i < products.length; i+=3)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

    		else if(wdth < 992)
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 2; i < products.length; i+=3)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

			//if window width is larger than 991px
			else
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 3; i < products.length; i+=4)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}	
    	}
    }

    /* 

	6. Init Isotope Filtering

	*/

    function initIsotopeFiltering()
    {
    	var sortTypes = $('.type_sorting_btn');
    	var sortNums = $('.num_sorting_btn');
    	var sortTypesSelected = $('.sorting_type .item_sorting_btn is-checked span');
    	var filterButton = $('.filter_button');

    	if($('.product-grid').length)
    	{
    		$('.product-grid').isotope({
    			itemSelector: '.product-item',
	            getSortData: {
	            	price: function(itemElement)
	            	{
	            		var priceEle = $(itemElement).find('.product_price').text().replace( '$', '' );
	            		return parseFloat(priceEle);
	            	},
	            	name: '.product_name'
	            },
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	        });

    		// Short based on the value from the sorting_type dropdown
	        sortTypes.each(function()
	        {
	        	$(this).on('click', function()
	        	{
	        		$('.type_sorting_text').text($(this).text());
	        		var option = $(this).attr('data-isotope-option');
	        		option = JSON.parse( option );
    				$('.product-grid').isotope( option );
	        	});
	        });

	        // Show only a selected number of items
	        sortNums.each(function()
	        {
	        	$(this).on('click', function()
	        	{
	        		var numSortingText = $(this).text();
					var numFilter = ':nth-child(-n+' + numSortingText + ')';
	        		$('.num_sorting_text').text($(this).text());
    				$('.product-grid').isotope({filter: numFilter });
	        	});
	        });	

	        // Filter based on the price range slider
	        filterButton.on('click', function()
	        {
	        	$('.product-grid').isotope({
		            filter: function()
		            {
		            	var priceRange = $('#amount').val();
			        	var priceMin = parseFloat(priceRange.split('-')[0].replace('$', ''));
			        	var priceMax = parseFloat(priceRange.split('-')[1].replace('$', ''));
			        	var itemPrice = $(this).find('.product_price').clone().children().remove().end().text().replace( '$', '' );

			        	return (itemPrice > priceMin) && (itemPrice < priceMax);
		            },
		            animationOptions: {
		                duration: 750,
		                easing: 'linear',
		                queue: false
		            }
		        });
	        });
    	}
    }

    /* 

	7. Init Price Slider

	*/

    function initPriceSlider()
    {
		$( "#slider-range" ).slider(
      
		{
			range: true,
			min: 0,
			max: 1000,
			values: [ 0, 580 ],
			slide: function( event, ui )
			{
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
			
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    }

    /* 

	8. Init Checkboxes

	*/

    function initCheckboxes()
    {
    	if($('.checkboxes li').length)
    	{
    		var boxes = $('.checkboxes li');

    		boxes.each(function()
    		{
    			var box = $(this);

    			box.on('click', function()
    			{
    				if(box.hasClass('active'))
    				{
    					box.find('i').removeClass('fa-square');
    					box.find('i').addClass('fa-square-o');
    					box.toggleClass('active');
    				}
    				else
    				{
    					box.find('i').removeClass('fa-square-o');
    					box.find('i').addClass('fa-square');
    					box.toggleClass('active');
    				}
    				// box.toggleClass('active');
    			});
    		});

    		if($('.show_more').length)
    		{
    			var checkboxes = $('.checkboxes');

    			$('.show_more').on('click', function()
    			{
    				checkboxes.toggleClass('active');
    			});
    		}
    	};
    }
   
     
  

});