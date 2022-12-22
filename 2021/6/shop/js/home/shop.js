window.theme = window.theme || {};
theme.cacheSelectors = function () {
  theme.cache = {
    $w: $(window),
    $body: $('body'),
    $wbmobileMenu: $('#WbMobileMenu'),
    $wbxsMenu: $('#WbxsMenu'),
    $wbmobileMenuList: $('.wbmobile-nav-menu'),
    wbCartboxAdd: '.wbcartbox-add',
    wbcartBox: '.wbcartbox',
    $wbsearchBox: $('.wbsearch-input'),
    $wbsearchSubmit: $('.wbsearch-submit')
  }
};
theme.init = function () {
  theme.cacheSelectors();
  theme.wbxsMenu();
 theme.wbcartPage();
  theme.drawersInit();
};
theme.wbcartPage = function () {

  theme.cache.$body.on('click', theme.cache.wbCartboxAdd, function () {
    $(this).addClass('is-hidden');
    $(theme.cache.wbcartBox).addClass('is-active');
  });
};
theme.drawersInit = function () {
  $('#PageContainer').addClass('drawer-page-content');
  $('.js-drawer-open-top').attr('aria-controls', 'SearchDrawer').attr('aria-expanded', 'false');
  theme.SearchDrawer = new theme.Drawers('SearchDrawer', 'top', {'onDrawerOpen': theme.searchFocus});
};
theme.searchFocus = function () {
  theme.cache.$wbsearchBox.focus();
  theme.cache.$wbsearchBox[0].setSelectionRange(0, theme.cache.$wbsearchBox[0].value.length);
};
theme.wbsearchSubmit = function () {
  theme.cache.$wbsearchSubmit.on('click', function(evt) {
    if (theme.cache.$wbsearchBox.val().length == 0) {
      evt.preventDefault();
      theme.cache.$wbsearchBox.focus();
    }
  });
};
theme.wbxsMenu = function () {
  theme.cache.$wbmobileMenu.on('click', function() {
    theme.cache.$wbxsMenu.slideToggle(220);
  });

  theme.cache.$wbmobileMenuList.on('click', function(evt) {
    var $el = $(this);
      evt.preventDefault();
      $el.toggleClass('is-active').next('.mobile-nav__sublist').slideToggle(200);
  });
};
theme.Drawers = (function () {
  var Drawer = function (id, position, options) {
    var defaults = {
      close: '.js-drawer-close',
      open: '.js-drawer-open-' + position,
      openClass: 'js-drawer-open',
      dirOpenClass: 'js-drawer-open-' + position
    };
    this.$nodes = {
      parent: $('body, html'),
      page: $('#PageContainer')
    };
    this.config = $.extend(defaults, options);
    this.position = position;
    this.$drawer = $('#' + id);
    if (!this.$drawer.length) {
      return false;
    }
    this.drawerIsOpen = false;
    this.init();
  };
  return Drawer;
})();
$(theme.init);


(function(e) {
   var wishlistName = "wbwishList";
   if (e(".collection_sidebar")) {
        History.Adapter.bind(window, 'statechange', function() {
            var State = History.getState();
            if (!t.isWbSidebarAjax) {
                t.sidebarParams();
                var newurl = t.sidebarCreateUrl();
                t.sidebarGetContent(newurl);
                t.reActivateSidebar();
            }
            t.isWbSidebarAjax = false;
        });
    }
  e('.swatch :radio').change(function() {
    var optionIndex = e(this).closest('.swatch').attr('data-option-index');
    var optionValue = e(this).val();
    e(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
  });

        safa.optionsWb = {};
        safa.updateOptionsInSelector = function(selectorIndex) {
            switch (selectorIndex) {
                case 0:
                    var key = 'root';
                    var selector = e('.single-option-selector:eq(0)');
                    break;
                case 1:
                    var key = e('.single-option-selector:eq(0)').val();
                    var selector = e('.single-option-selector:eq(1)');
                    break;
                case 2:
                    var key = e('.single-option-selector:eq(0)').val();
                    key += ' / ' + e('.single-option-selector:eq(1)').val();
                    var selector = e('.single-option-selector:eq(2)');
            }
            var initialValue = selector.val();
            selector.empty();
            var availableOptions = safa.optionsWb[key];
            if (availableOptions && availableOptions.length) {
              for (var i = 0; i < availableOptions.length; i++) {
                  var option = availableOptions[i];
                  var newOption = e('<option></option>').val(option).html(option);
                  selector.append(newOption);
              }
              e('.swatch[data-option-index="' + selectorIndex + '"] .swatch-element').each(function() {
                  if (e.inArray(e(this).attr('data-value'), availableOptions) !== -1) {
                      e(this).removeClass('soldout').show().find(':radio').removeAttr('disabled', 'disabled').removeAttr('checked');
                  } else {
                      e(this).addClass('soldout').hide().find(':radio').removeAttr('checked').attr('disabled', 'disabled');
                  }
              });
              if (e.inArray(initialValue, availableOptions) !== -1) {
                  selector.val(initialValue);
              }
              selector.trigger('change');
            }
        };

        safa.linkOptionSelectors = function(product) {
            for (var i = 0; i < product.variants.length; i++) {
                var variant = product.variants[i];
                if (variant.available) {
                    safa.optionsWb['root'] = safa.optionsWb['root'] || [];
                    safa.optionsWb['root'].push(variant.option1);
                    safa.optionsWb['root'] = safa.uniq(safa.optionsWb['root']);
                    if (product.options.length > 1) {
                        var key = variant.option1;
                        safa.optionsWb[key] = safa.optionsWb[key] || [];
                        safa.optionsWb[key].push(variant.option2);
                        safa.optionsWb[key] = safa.uniq(safa.optionsWb[key]);
                    }
                    if (product.options.length === 3) {
                        var key = variant.option1 + ' / ' + variant.option2;
                        safa.optionsWb[key] = safa.optionsWb[key] || [];
                        safa.optionsWb[key].push(variant.option3);
                        safa.optionsWb[key] = safa.uniq(safa.optionsWb[key]);
                    }
                }
            }
            safa.updateOptionsInSelector(0);
            if (product.options.length > 1) safa.updateOptionsInSelector(1);
            if (product.options.length === 3) safa.updateOptionsInSelector(2);
            e(".single-option-selector:eq(0)").change(function() {
                safa.updateOptionsInSelector(1);
                if (product.options.length === 3) safa.updateOptionsInSelector(2);
                return true;
            });
            e(".single-option-selector:eq(1)").change(function() {
                if (product.options.length === 3) safa.updateOptionsInSelector(2);
                return true;
            });
        };
    e(document).ready(function() {
        t.init()
    });

     e(document).on("click touchstart", function(n) {
            var r = e(".quick-view");
            var i = e("#slidedown-cart");
            var s = e("#ToggleDown");
            var o = e("#email-modal .modal-window");

            if (!r.is(n.target) && r.has(n.target).length === 0 && !i.is(n.target) && i.has(n.target).length === 0 && !s.is(n.target) && s.has(n.target).length === 0 && !o.is(n.target) && o.has(n.target).length === 0 ) {
                t.closeQuickViewPopup();
                t.closeDropdownCart();
                t.closeEmailModalWindow();
            }
        })

    e(document).keyup(function(n) {
        if (n.keyCode == 27) {
            t.closeQuickViewPopup();
            t.closeDropdownCart();
            clearTimeout(t.KidsTimeout);
            if (e(".modal").is(":visible")) {
                e(".modal").fadeOut(500)
            }
        }
    });
    var t = {
        KidsTimeout: null,
        isWbSidebarAjax: false,
        init: function() {
            this.initQuickView();
            this.initWbAddToCart();
            this.initWbModal();
            this.initWbProAddToCart();
            this.initWbDropDownCart();
            this.initWishlist();
            this.initWbProWishlist();
            this.initWbProMoreview();
            this.initWbelevateZoom();
            this.initWbShortcode();
            this.initWbParallex();
            this.initWbScrollToTop();
            this.initWbHeaderSticky();
            this.initWbSidebar();
            this.initWbColorSwatchGrid();
            this.initWbInfiniteScroll();
        },
       initWbColorSwatchGrid: function() {
          jQuery('.item-swatch li label').click(function(){
            var newImage = jQuery(this).parent().find('.hidden img').attr('src');
           jQuery(this).parents('.item-row').find('.featured-image').attr({ src: newImage });
            return false;
          });
        },

       initWbHeaderSticky: function(){
       var w = window.innerWidth;
       if (w > 767) {
         e(".header-sticky").sticky({topSpacing:0});
         var headerH = $('.header-sticky').height();
            e(document).bind('ready scroll', function() {
              var docScroll = $(document).scrollTop();
                if(docScroll >= headerH) {
                    if (!e('#header-landing').hasClass('header-animate')) {
                        e('#header-landing').addClass('header-animate').css({ top: '-155px' }).stop().animate({ top: 0 }, 500);
                    }
                } else {
                    e('#header-landing').removeClass('header-animate').removeAttr('style');
                }
            });
        }
     if (w < 767) { e('.desktop-megamenu').remove();}
       },

      initWbScrollToTop: function(){
      e().UItoTop({ easingType: 'easeOutQuart' });
      },

       initWbParallex: function() {
       },

      initWbShortcode: function() {
       e('.dt-sc-toggle').toggle(function(){ e(this).addClass('active'); },function(){ e(this).removeClass('active'); });
     e('.dt-sc-toggle').click(function(){ e(this).next('.dt-sc-toggle-content').slideToggle(); });
     e('.dt-sc-toggle-frame-set').each(function(){
    var $this = e(this),
    $toggle = $this.find('.dt-sc-toggle-accordion');

    $toggle.click(function(){
      if( e(this).next().is(':hidden') ) {
        $this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
        e(this).toggleClass('active').next().slideDown();
      }
      return false;
    });

    $this.find('.dt-sc-toggle-accordion:first').addClass("active");
    $this.find('.dt-sc-toggle-accordion:first').next().slideDown();
  });

  if(e('ul.tabs').length > 0) {
    e('ul.tabs').tabs('> .protabc_content');
  }

  if(e('ul.protabc-frame').length > 0){
  e('ul.protabc-frame').tabs('> .protabc-frame-content');
  }

  if(e('ul.tabs').length > 0) {
    e('ul.tabs').tabs('> .protabc_content');
  }

  if(e('ul.protabc').length > 0) {
    e('ul.protabc').tabs('> .protabc-content');
  }

// wb category product
   if(e('.pctab').length > 0) {
    e('.pctab').tabs('.mainpcat > .catproclick');
  }

  if(e('.protabc-vertical-frame').length > 0){

    e('.protabc-vertical-frame').tabs('> .protabc-vertical-frame-content');

    e('.protabc-vertical-frame').each(function(){
      e(this).find("li:first").addClass('first').addClass('current');
      e(this).find("li:last").addClass('last');
    });

    e('.protabc-vertical-frame li').click(function(){
      e(this).parent().children().removeClass('current');
      e(this).addClass('current');
    });

  }
      },

        initWishlist: function() {
           t.updateWishlistButtons()
           t.initWishlistButtons()
        },

      initWishlistButtons: function() {
        if(e(".add-in-wishlist-js").length == 0) {
          return false;
        }
        e(".add-in-wishlist-js").each(function(){
          e(this).unbind();
          e(this).click(function(event){

            event.preventDefault();
            try
            {
              var id = e(this).attr('href');
              if(e.cookie(wishlistName) == null) {
                var str = id;
              } else {
                if(e.cookie(wishlistName).indexOf(id) == -1) {
                  var str = e.cookie(wishlistName) + '__' + id;
                }
              }
              e.cookie(wishlistName, str, {expires:14, path:'/'});
              jQuery('.loadding-wishbutton-'+id).show();
              jQuery('.default-wishbutton-'+id).remove();
              setTimeout(function(){ jQuery('.loadding-wishbutton-'+id).remove(); jQuery('.added-wishbutton-'+id).show(); }, 2000);
              e(this).unbind();
            }
            catch (err) {}
          })
        });
      },

      updateWishlistButtons: function() {
        try
        {
          if(e.cookie(wishlistName) != null && e.cookie(wishlistName) != '__' && e.cookie(wishlistName) != '') {
            var str = String(e.cookie(wishlistName)).split("__");
            for (var i=0; i<str.length; i++) {
              if (str[i] != '') {
                jQuery('.added-wishbutton-'+str[i]).show();
                jQuery('.default-wishbutton-'+str[i]).remove();
                jQuery('.loadding-wishbutton-'+str[i]).remove();

              }
            }
          }
        }
        catch (err) {}
      },

       initWbelevateZoom: function() {
            e("#product-featured-image").length > 0 && (e(".visible-phone").is(":visible") ? (e("#product-featured-image").elevateZoom({
                gallery: "ProductThumbs",
                cursor: "pointer",
                galleryActiveClass: "active",
                imageCrossfade: !1,
                scrollZoom: !1,
                onImageSwapComplete: function() {
                    e(".zoomWrapper div").hide()
                },
                loadingIcon: window.loading_url
            }), e("#product-featured-image").bind("click", function() {
                return !1
            })) : (e("#product-featured-image").elevateZoom({
                gallery: "ProductThumbs",
                cursor: "pointer",
                galleryActiveClass: "active",
                imageCrossfade: !0,
                scrollZoom: !0,
                onImageSwapComplete: function() {
                    e(".zoomWrapper div").hide()
                },
                loadingIcon: window.loading_url
            }), e("#product-featured-image").bind("click", function() {
                var i = e("#product-featured-image").data("elevateZoom");
                return e.fancybox(i.getGalleryList()), !1
            })))
        },

     initWbProMoreview: function() {
      e(".more-view-wrapper-owlslider ul").owlCarousel({
                navigation: true,
                items: 5,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [979, 3],
                itemsTablet: [767, 4],
                itemsTabletSmall: [540, 4],
                itemsMobile: [360, 2]
            }).css("visibility", "visible")

        },
        initWbProWishlist: function() {
            e(".singlepro button.wishlist").click(function(n) {
                n.preventDefault();
                var r = e(this).parent();
                var i = r.parents(".grid-item");
                e.ajax({
                    type: "POST",
                    url: "/contact",
                    data: r.serialize(),
                    beforeSend: function() {
                        t.showLoading()
                    },
                    success: function(n) {
                        t.hideLoading();
                       var o = e("#product-featured-image").attr("src");
                       var wp = e(".proname").text();
                       var wd = e(".page-des").text();
                       var wamt = e(".singlepro__price .grid-link__org_price span.money").text();
                       var wdamt = e(".sale_price").text();

                      e(".ajax-success-modal").find(".added-to-wishlist").show();
                      e(".ajax-success-modal").find(".added-to-cart").hide();
                      e(".ajax-success-modal").find(".ajax-product-image").attr("src", o);
                      e(".ajax-success-modal").find(".ajax-product-title").text(wp);
                      e(".ajax-success-modal").find(".ajax_des").text(wd);
                      e(".ajax-success-modal").find(".ajax_price").text(wamt);
                      e(".ajax-success-modal").find(".ajax_dprice").text(wdamt);
                      t.showModal(".ajax-success-modal")
                    },
                    error: function(n, r) {
                        t.hideLoading();
                        e(".loading-modal").hide();
                        e(".ajax-error-message").text(e.parseJSON(n.responseText).description);
                        t.showModal(".ajax-error-modal")
                    }
                })
            })
        },

        showModal: function(n) {
            e(n).fadeIn(500);
            t.KidsTimeout = setTimeout(function() {
                e(n).fadeOut(500)
            }, 5e3)
        },
        checkItemsInDropdownCart: function() {
            if (e("#slidedown-cart .mini-products-list").children().length > 0) {
                e("#slidedown-cart .no-items").hide();
                e("#slidedown-cart .has-items").show()
            } else {
                e("#slidedown-cart .has-items").hide();
                e("#slidedown-cart .no-items").show()
            }
        },
        initWbModal: function() {
            e(".continue-shopping").click(function() {
                clearTimeout(t.KidsTimeout);
                e(".ajax-success-modal").fadeOut(500)
            });
            e(".close-modal, .overlay").click(function() {
                clearTimeout(t.KidsTimeout);
                e(".ajax-success-modal").fadeOut(500)
            })
        },
        initWbDropDownCart: function() {
            if (window.dropdowncart_type == "click") {
                e("#ToggleDown").click(function() {
                    if (e("#slidedown-cart").is(":visible")) {
                        e("#slidedown-cart").slideUp("fast")
                    } else {
                        e("#slidedown-cart").slideDown("fast")
                    }
                })
            } else {
                if (!("ontouchstart" in document)) {
                    e("#ToggleDown").hover(function() {
                        if (!e("#slidedown-cart").is(":visible")) {
                            e("#slidedown-cart").slideDown("fast")
                        }
                    });
                    e(".wrapper-top-cart").mouseleave(function() {
                        e("#slidedown-cart").slideUp("fast")
                    })
                } else {
                    e("#ToggleDown").click(function() {
                        if (e("#slidedown-cart").is(":visible")) {
                            e("#slidedown-cart").slideUp("fast")
                        } else {
                            e("#slidedown-cart").slideDown("fast")
                        }
                    })
                }
            }
            t.checkItemsInDropdownCart();
            e("#slidedown-cart .no-items a").click(function() {
                e("#slidedown-cart").slideUp("fast")
            });
            e("#slidedown-cart .btn-remove").click(function(n) {
                n.preventDefault();
                var r = e(this).parents(".item").attr("id");
                r = r.match(/\d+/g);
                safa.removeItem(r, function(e) {
                    t.doUpdateDropdownCart(e)
                })
            })
        },
        closeDropdownCart: function() {
            if (e("#slidedown-cart").is(":visible")) {
                e("#slidedown-cart").slideUp("fast")
            }
        },

        initWbProAddToCart: function() {
            if (e("#AddToCart").length > 0) {
                e("#AddToCart").click(function(n) {
                    n.preventDefault();
                    if (e(this).attr("disabled") != "disabled") {
                        if (!window.ajax_cart) {
                            e(this).closest("form").submit()
                        } else {
                            var r = e("#AddToCartForm select[name=id]").val();
                            if (!r) {
                                r = e("#AddToCartForm input[name=id]").val()
                            }
                            var i = e("#AddToCartForm select[name=quantity]").val();
                            if (!i) {
                                i = 1
                            }
                            var o = e("#product-featured-image").attr("src");
                            var p = e(".proname").text();
                            var d = e(".page-des").text();
                            var amt = e(".product_single_price .grid-link__org_price span.money").text();
                            var damt = e(".sale_price").text();
                          console.log(amt);
                            t.doAjaxAddToCart(r, i, o, p, d, amt ,damt)
                        }
                    }
                    return false
                })
            }
        },
        initWbAddToCart: function() {
            if (e(".add-cart-btn").length > 0) {
                e(".add-cart-btn").click(function(n) {
                    n.preventDefault();
                    if (e(this).attr("disabled") != "disabled") {
                        var r = e(this).parents(".item-row");
                        var i = e(r).attr("id");
                        i = i.match(/\d+/g);
                        if (!window.ajax_cart) {
                            e("#cart-form-" + i).submit()
                        } else {
                            var s = e("#cart-form-" + i + " select[name=id]").val();
                            if (!s) {
                                s = e("#cart-form-" + i + " input[name=id]").val()
                            }
                            var o = e("#cart-form-" + i + " select[name=quantity]").val();
                            if (!o) {
                                o = 1
                            }
                          console.log(o);
                           var a = e(r).find(".featured-image").attr("src");
                           var p = e(r).find(".grid-link__title").text();
                           var d = e(r).find(".thumbdes").text();
                           var amt = e(r).find(".product_price .grid-link__org_price span.money").text();
                           var damt = e(r).find(".dis-price").text();
                            t.doAjaxAddToCart(s, o, a, p, d, amt ,damt)
                        }
                    }
                    return false
                })
            }
        },
        showLoading: function() {
            e(".loading-modal").show()
        },
        hideLoading: function() {
            e(".loading-modal").hide()
        },
        doAjaxAddToCart: function(n, r, a, p, d, amt ,damt) {
            e.ajax({
                type: "post",
                url: "/cart/add.js",
                data: "quantity=" + r + "&id=" + n,
                dataType: "json",
                beforeSend: function() {
                    t.showLoading()
                },
                success: function(n) {
                    t.hideLoading();
                    t.showModal(".ajax-success-modal");
                     e(".ajax-success-modal").find(".ajax-product-image").attr("src", a);
                     e(".ajax-success-modal").find(".added-to-wishlist").hide();
                     e(".ajax-success-modal").find(".added-to-cart").show();
                     e(".ajax-success-modal").find(".ajax-product-title").text(p);
                     e(".ajax-success-modal").find(".ajax_des").text(d);
                     e(".ajax-success-modal").find(".ajax_price").text(amt);
                     e(".ajax-success-modal").find(".ajax_dprice").text(damt);

                    t.updateDropdownCart()
                },
                error: function(n, r) {
                    t.hideLoading();
                    e(".ajax-error-message").text(e.parseJSON(n.responseText).description);
                    t.showModal(".ajax-error-modal")
                }
            })
        },
        initQuickView: function() {
            e(".quick-view-text").click(function() {
              e('.quick-view').addClass('open-in');
                var product = e(this).attr("id");
                safa.getProduct(product, function(product) {
                    var r = e("#quickview-template").html();
                    e(".quick-view").html(r);
                    var i = e(".quick-view");
                    var s = product.description.replace(/(<([^>]+)>)/ig, "");
                    s = s.split(" ").splice(0, 40).join(" ") + "...";
                    i.find(".product-title a").text(product.title);
                    i.find(".product-title a").attr("href", product.url);
                  if (i.find('.product-inventory span').length > 0) {
                      var variant = product.variants[0];
                      var inventoryInfo = i.find('.product-inventory span');
                      if (variant.available) {
                       if (variant.inventory_management != null) {
                          inventoryInfo.text(window.in_stock);
                        } else {
                          inventoryInfo.text(window.many_in_stock);
                        }
                      } else {
                        inventoryInfo.text(window.out_of_stock);
                      }
                    }

                    i.find(".page-des").text(s);
                    i.find(".price").html(safa.formatMoney(product.price, window.money_format));
                    i.find(".product-item").attr("id", "product-" + product.id);
                    i.find(".variants").attr("id", "product-actions-" + product.id);
                    i.find(".variants select").attr("id", "product-select-" + product.id);
                    if (product.compare_at_price > product.price) {
                        i.find(".compare-price").html(safa.formatMoney(product.compare_at_price_max, window.money_format)).show();
                        i.find(".price").addClass("on-sale")
                    } else {
                        i.find(".compare-price").html("");
                        i.find(".price").removeClass("on-sale")
                    }
                    if (!product.available) {
                        i.find("select, input, .total-price, .dec, .inc, .variants label").remove();
                        i.find(".add-to-cart-btn").text("Unavailable").addClass("disabled").attr("disabled", "disabled");
                    } else {
                        i.find(".total-price .price").html(safa.formatMoney(product.price, window.money_format));
                        t.createQuickViewVariants(product, i)

                    }
                    i.find(".button").on("click", function() {
                        var n = i.find(".quantity").val(),
                            r = 1;
                        if (e(this).text() == "+") {
                            r = parseInt(n) + 1
                        } else if (n > 1) {
                            r = parseInt(n) - 1
                        }
                        i.find(".quantity").val(r);
                    });

                    t.loadQuickViewSlider(product, i);
                    t.initQuickviewAddToCart();
                    e(".quick-view").fadeIn(500);

                });
                return false
            });
             e(".quick-view .overlay, .close-window").live("click", function() {
                t.closeQuickViewPopup();
               e('.quick-view').removeClass("open-in");
               e('.quick-view').removeClass("option-loader");

                return false
            })

        },

        initQuickviewAddToCart: function() {
            if (e(".quick-view .add-to-cart-btn").length > 0) {
                e(".quick-view .add-to-cart-btn").click(function() {
                    var n = e(".quick-view select[name=id]").val();
                    if (!n) {
                        n = e(".quick-view input[name=id]").val()
                    }
                    var r = e(".quick-view input[name=quantity]").val();
                    if (!r) {
                        r = 1
                    }
                    var p = e('.quick-view .product-title a').html();
                    var a = e(".quick-view .quickview-featured-image img").attr("src");
                    t.doAjaxAddToCart(n, r, a, p);
                    t.closeQuickViewPopup();
                    e('.quick-view').removeClass("open-in");
                  e('.quick-view').removeClass("option-loader");
                })
            }
        },
        updateDropdownCart: function() {
            safa.getCart(function(e) {
                t.doUpdateDropdownCart(e)
            })
        },
        doUpdateDropdownCart: function(n) {
            var r = '<li class="item" id="cart-item-{ID}"><a href="{URL}" title="{TITLE}" class="product-image"><img src="{IMAGE}" alt="{TITLE}"></a><div class="product-details"><a href="javascript:void(0)" title="Remove This Item" class="btn-remove"><span class="icon-close"></span></a><p class="product-name"><a href="{URL}">{TITLE}</a></p><div class="cart-collateral">{QUANTITY} x <span class="price">{PRICE}</span></div></div></li>';
          e("#cartCount").text(n.item_count );
            e("#minicart_total span.money").html(safa.formatMoney(n.total_price, window.money_format));
            e(".cart-tot span.money").html(safa.formatMoney(n.total_price, window.money_format));
            e("#slidedown-cart .summary .price").html(safa.formatMoney(n.total_price, window.money_format));
            e("#slidedown-cart .mini-products-list").html("");
            if (n.item_count > 0) {
                for (var i = 0; i < n.items.length; i++) {
                    var s = r;
                    s = s.replace(/\{ID\}/g, n.items[i].id);
                    s = s.replace(/\{URL\}/g, n.items[i].url);
                    s = s.replace(/\{TITLE\}/g, n.items[i].title);
                    s = s.replace(/\{QUANTITY\}/g, n.items[i].quantity);
                    s = s.replace(/\{IMAGE\}/g, safa.resizeImage(n.items[i].image, "small"));
                    s = s.replace(/\{PRICE\}/g, safa.formatMoney(n.items[i].price, window.money_format));
                    e("#slidedown-cart .mini-products-list").append(s)
                }
                e("#slidedown-cart .btn-remove").click(function(n) {
                    n.preventDefault();
                    var r = e(this).parents(".item").attr("id");
                    r = r.match(/\d+/g);
                    safa.removeItem(r, function(e) {
                        t.doUpdateDropdownCart(e);
                    })
                });
                if (t.checkNeedToConvertCurrency()) {
                    Currency.convertAll(window.shop_currency, jQuery('#currencies').val(), '#slidedown-cart span.money', 'money_format')
                    Currency.convertAll(window.shop_currency, jQuery('#currencies').val(), '.cart-tot span.money', 'money_format')
                    Currency.convertAll(window.shop_currency, jQuery('#currencies').val(), '#minicart_total span.money', 'money_format')

                }
            }
            t.checkItemsInDropdownCart()
        },
        checkNeedToConvertCurrency: function() {
            return window.show_multiple_currencies && Currency.currentCurrency != shopCurrency
        },
        loadQuickViewSlider: function(product, r) {
            var s = safa.resizeImage(product.featured_image, "large");
            r.find(".quickview-featured-image").append('<a href="' + product.url + '"><img src="' + s + '" title="' + product.title + '"/><div style="height: 100%; width: 100%; top:0px; left:-260px; z-index: 2000; position: absolute; display: none; background: url(' + window.loading_url + ') 50% 50% no-repeat;"></div></a>');
            if (product.images.length > 1) {
                var o = r.find(".more-view-wrapper ul");
                for (i in product.images) {
                    var u = safa.resizeImage(product.images[i], "large");
                    var a = safa.resizeImage(product.images[i], "small");
                    var f = '<li><a href="javascript:void(0)" data-image="' + u + '"><img src="' + a + '"  /></a></li>';
                    o.append(f)
                }
                o.find("a").click(function() {
                    var t = r.find(".quickview-featured-image img");
                    var product = r.find(".quickview-featured-image div");
                    if (t.attr("src") != e(this).attr("data-image")) {
                        t.attr("src", e(this).attr("data-image"));
                        product.show();
                        t.load(function(t) {
                            product.hide();
                            e(this).unbind("load");
                            product.hide()
                        })
                    }
                });

                 if (o.hasClass("quickview-more-views-owlslider")) {
                    t.initQuickViewMoreview(o)
                } else {
                    t.initQuickViewMoreview(o)
                }

            } else {

                r.find(".more-view-wrapper").remove();

            }
        },
         closeEmailModalWindow: function() {
            if (e("#email-modal").length > 0 && e("#email-modal").is(":visible")) {
                e("#email-modal .modal-window").fadeOut(600, function() {
                    e("#email-modal .modal-overlay").fadeOut(600, function() {
                        e("#email-modal").hide();
                        e.cookie("emailSubcribeModal", "closed", {
                            expires: 1,
                            path: "/"
                        })
                    })
                })
            }
        },
        initQuickViewMoreview: function(t) {
            if (t) {
                t.owlCarousel({
                    navigation: false,
                    items: 4,
                    itemsDesktop: [1199, 4],
                    itemsDesktopSmall: [979, 3],
                    itemsTablet: [768, 3],
                    itemsTabletSmall: [540, 3],
                    itemsMobile: [360, 3],
                    pagination: true
                }).css("visibility", "visible")
            }

        },


        convertToSlug: function(e) {
            return e.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
        },

        createQuickViewVariants: function(t, product) {
            if (t.variants.length > 1) {
                for (var r = 0; r < t.variants.length; r++) {
                    var i = t.variants[r];
                    var s = '<option value="' + i.id + '">' + i.title + "</option>";
                    product.find("form.variants > select").append(s)
                }
                new safa.OptionSelectors("product-select-" + t.id, { product: t,  onVariantSelected: selectCallbackQuickview  });

                if (t.options.length == 1) {
                    e(".selector-wrapper:eq(0)").prepend("<label>" + t.options[0].name + "</label>")
                }
                product.find("form.variants .selector-wrapper label").each(function(n, r) {
                    e(this).html(t.options[n].name)
                })
            } else {
                product.find("form.variants > select").remove();
                var o = '<input type="hidden" name="id" value="' + t.variants[0].id + '">';
                product.find("form.variants").append(o)
            }
        },
            closeQuickViewPopup: function() {
            e(".quick-view").fadeOut(500)
        },
       initWbSidebar: function() {
            if (e(".collection_sidebar").length > 0) {
                t.sidebarParams();
                t.sidebarMapEvents();
                t.sidebarInitToggle();
                t.sidebarMapClear();
                t.sidebarMapClearAll();
                t.initSortby();
                t.sidebarMapPaging();
            }
        },

       sidebarMapView: function() {
            e(".view-mode a").click(function(n) {
                if (!e(this).hasClass("active")) {
                    var paging = e(".filter-show  button span").text();
                    if (e(this).hasClass("list")) {
                        safa.queryParams.view = "list" + paging;
                    } else {
                        safa.queryParams.view = paging;
                    }

                    t.sidebarAjaxClick();
                    e(".view-mode a.active").removeClass("active");
                    e(this).addClass("active");
                }
                n.preventDefault();
            });
        },

        sidebarMapSorting: function(n) {
            e(".filter-sortby a").click(function(n) {
                if (!e(this).parent().hasClass("active")) {
                    safa.queryParams.sort_by = e(this).attr("href");
                    t.sidebarAjaxClick();
                    var sortbyText = e(this).text();
                    e(".filter-sortby  button span").text(sortbyText);
                    e(".filter-sortby li.active").removeClass("active");
                    e(this).parent().addClass("active");
                }
                n.preventDefault();
            });
        },

       initSortby: function() {
            if (safa.queryParams.sort_by) {
                var sortby = safa.queryParams.sort_by;
                var sortbyText = e(".filter-sortby a[href='" + sortby + "']").text();
                e(".filter-sortby  button span").text(sortbyText);
                e(".filter-sortby li.active").removeClass("active");
                e(".filter-sortby a[href='" + sortby + "']").parent().addClass("active");
            }
        },
        sidebarMapPaging: function() {
            e(".pagination-custom a").click(function(n) {
                var page = e(this).attr("href").match(/page=\d+/g);
                if (page) {
                    safa.queryParams.page = parseInt(page[0].match(/\d+/g));
                    if (safa.queryParams.page) {
                        var newurl = t.sidebarCreateUrl();
                        t.isWbSidebarAjax = true;
                        History.pushState({
                            param: safa.queryParams
                        }, newurl, newurl);
                        t.sidebarGetContent(newurl);
                        e('body,html').animate({
                            scrollTop: 500
                        }, 600);
                    }
                }
                n.preventDefault();
            });
        },
       sidebarMapTagEvents: function() {
            e('.sidebar-tag a:not(".clear"), .sidebar-tag label').click(function(n) {
                var currentTags = [];
                if (safa.queryParams.constraint) {
                    currentTags = safa.queryParams.constraint.split('+');
                }

                if (!window.enable_sidebar_multiple_choice && !e(this).prev().is(":checked")) {
                    var otherTag = e(this).parents('.sidebar-tag').find("input:checked");
                    if (otherTag.length > 0) {
                        var tagName = otherTag.val();
                        if (tagName) {
                            var tagPos = currentTags.indexOf(tagName);
                            if (tagPos >= 0) {
                                //remove tag
                                currentTags.splice(tagPos, 1);
                            }
                        }
                    }
                }

                var tagName = e(this).prev().val();
                if (tagName) {
                    var tagPos = currentTags.indexOf(tagName);
                    if (tagPos >= 0) {
                        currentTags.splice(tagPos, 1);
                    } else {
                        currentTags.push(tagName);
                    }
                }
                if (currentTags.length) {
                    safa.queryParams.constraint = currentTags.join('+');
                } else {
                    delete safa.queryParams.constraint;
                }
                t.sidebarAjaxClick();
                n.preventDefault();
            });
        },

        sidebarInitToggle: function() {
            if (e(".sidebar-tag").length > 0) {
                e(".sidebar-tag .widget span").click(function() {
                    var $title = e(this).parents('.widget');
                    if ($title.hasClass('click')) {
                        $title.removeClass('click');
                    } else {
                        $title.addClass('click');
                    }

                    e(this).parents(".sidebar-tag").find(".widget-content").slideToggle();
                });
            }
        },

        sidebarMapClearAll: function() {
            e('.refined-widgets a.clear-all').click(function(n) {
                delete safa.queryParams.constraint;
                delete safa.queryParams.q;
                t.sidebarAjaxClick();
                n.preventDefault();
            });
        },
        sidebarMapClear: function() {
            e(".sidebar-tag").each(function() {
                var sidebarTag = e(this);
                if (sidebarTag.find("input:checked").length > 0) {
                    sidebarTag.find(".clear").show().click(function(n) {
                        var currentTags = [];
                        if (safa.queryParams.constraint) {
                            currentTags = safa.queryParams.constraint.split('+');
                        }
                        sidebarTag.find("input:checked").each(function() {
                            var selectedTag = e(this);
                            var tagName = selectedTag.val();
                            if (tagName) {
                                var tagPos = currentTags.indexOf(tagName);
                                if (tagPos >= 0) {
                                    currentTags.splice(tagPos, 1);
                                }
                            }
                        });
                        if (currentTags.length) {
                            safa.queryParams.constraint = currentTags.join('+');
                        } else {
                            delete safa.queryParams.constraint;
                        }
            t.sidebarAjaxClick();
                        n.preventDefault();
                    });
                }
            });
        },
        sidebarMapEvents: function() {
            t.sidebarMapTagEvents();
            t.sidebarMapView();
            t.sidebarMapSorting();
        },
         reActivateSidebar: function() {
            e(".sidebar-tag .active").removeClass("active");
            e(".sidebar-tag input:checked").attr("checked", false);

            if (safa.queryParams.view) {
                e(".view-mode .active").removeClass("active");
                var view = safa.queryParams.view;
                if (view.indexOf("list") >= 0) {
                    e(".view-mode .list").addClass("active");
                    view = view.replace("list", "");
                } else {
                    e(".view-mode .grid").addClass("active");
                }
                e(".filter-show  button span").text(view);
                e(".filter-show li.active").removeClass("active");
                e(".filter-show a[href='" + view + "']").parent().addClass("active");
            }
            t.initSortby();
        },
        sidebarMapData: function(data) {
            var currentList = e(".col-main .products-grid-view");
            if (currentList.length == 0) {
                currentList = e(".col-main .product-list-view");
            }
            var productList = e(data).find(".col-main .products-grid-view");
            if (productList.length == 0) {
                productList = e(data).find(".col-main .product-list-view");
            }
            currentList.replaceWith(productList);
            if (t.checkNeedToConvertCurrency()) {
                Currency.convertAll(window.shop_currency, jQuery('#currencies').val(), '.col-main span.money', 'money_format');
            }

            e(".refined-widgets").replaceWith(e(data).find(".refined-widgets"));

            e(".sidebar-block").replaceWith(e(data).find(".sidebar-block"));

            if (e(".padding").length > 0) {
                e(".padding").replaceWith(e(data).find(".padding"));
            } else {
                e(".grid-link__container.col-main").append(e(data).find(".padding"));
            }

           if ($(".spr-badge").length > 0) {
                return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges();
            }
        },
        sidebarCreateUrl: function(baseLink) {
            var newQuery = e.param(safa.queryParams).replace(/%2B/g, '+');
            if (baseLink) {
                if (newQuery != "")
                    return baseLink + "?" + newQuery;
                else
                    return baseLink;
            }
            return location.pathname + "?" + newQuery;
        },
        sidebarAjaxClick: function(baseLink) {
            delete safa.queryParams.page;
            var newurl = t.sidebarCreateUrl(baseLink);
            t.isWbSidebarAjax = true;
            History.pushState({
                param: safa.queryParams
            }, newurl, newurl);
            t.sidebarGetContent(newurl);
        },
        sidebarGetContent: function(newurl) {
            $.ajax({
                type: 'get',
                url: newurl,
                beforeSend: function() {
                    t.showLoading();
                },
                success: function(data) {
                    t.sidebarMapData(data);
                    t.sidebarMapTagEvents();
                    t.sidebarInitToggle();
                    t.sidebarMapClear();
                    t.sidebarMapClearAll();
                    t.hideLoading();
                    t.initQuickView();
                    t.initWbAddToCart();
                    t.initWishlist();
                    t.sidebarMapPaging()
                },
                error: function(xhr, text) {
                    t.hideLoading();
                    e('.loading-modal').hide();
                    e('.ajax-error-message').text($.parseJSON(xhr.responseText).description);
                    t.showModal('.ajax-error-modal');
                }
            });
        },
        sidebarParams: function() {
            safa.queryParams = {};
            if (location.search.length) {
                for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
                    aKeyValue = aCouples[i].split('=');
                    if (aKeyValue.length > 1) {
                        safa.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
                    }
                }
            }
        },
       initWbInfiniteScroll: function() {
            e(".infinite-scrolling").length > 0 && e(".infinite-scrolling a").click(function(i) {
                i.preventDefault(), e(this).hasClass("disabled") || t.doInfiniteScrolling()
            })
        },
        doInfiniteScrolling: function() {
            var currentList = $('.col-main .products-grid-view');
            if (!currentList.length) {
                currentList = $('.col-main .product-list-view');
            }
            if (currentList) {
                var showMoreButton = $('.infinite-scrolling a').first();
                $.ajax({
                    type: 'GET',
                    url: showMoreButton.attr("href"),
                    beforeSend: function() {
                        t.showLoading();
                        $('.loading-modal').show();
                    },
                    success: function(data) {
                        t.hideLoading();
                        var products = $(data).find(".col-main .products-grid-view");
                        if (!products.length) {
                            products = $(data).find(".col-main .product-list-view");
                        }
                        if (products.length) {
                            currentList.append(products.children());
                            t.initQuickView();
                            t.initWbAddToCart();
                            t.initWishlist();
                            if ($(data).find('.infinite-scrolling').length > 0) {
                                showMoreButton.attr('href', $(data).find('.infinite-scrolling a').attr('href'));
                            } else {
                                showMoreButton.hide();
                                showMoreButton.next().show();
                            }

                            if (window.show_multiple_currencies && window.shop_currency != jQuery("#currencies").val())
                            {
                                Currency.convertAll(window.shop_currency, jQuery("#currencies").val(), "span.money", "money_format")
                            }

                            t.initWbColorSwatchGrid();

                            if ($(".spr-badge").length > 0) {
                                return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges();
                            }
                        }
                    },
                    error: function(xhr, text) {
                        t.hideLoading();
                        $('.loading-modal').hide();
                        $('.ajax-error-message').text($.parseJSON(xhr.responseText).description);
                        t.showModal('.ajax-error-modal');
                    },
                    dataType: "html"
                });
            }
        }

    }

})(jQuery)