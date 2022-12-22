function floatToString(t,r){var e=t.toFixed(r).toString();return e.match(/^\.\d+/)?"0"+e:e}function attributeToString(t){return"string"!=typeof t&&"undefined"===(t+="")&&(t=""),jQuery.trim(t)}"undefined"==typeof window.safa&&(window.safa={}),safa.money_format="${{amount}}",safa.onError=function(t,r){var e=eval("("+t.responseText+")");e.message?alert(e.message+"("+e.status+"): "+e.description):alert("Error : "+safa.fullMessagesFromErrors(e).join("; ")+".")},safa.fullMessagesFromErrors=function(t){var o=[];return jQuery.each(t,function(e,t){jQuery.each(t,function(t,r){o.push(e+" "+r)})}),o},safa.onCartUpdate=function(t){alert("There are now "+t.item_count+" items in the cart.")},safa.onCartShippingRatesUpdate=function(t,r){var e="";r.zip&&(e+=r.zip+", "),r.province&&(e+=r.province+", "),e+=r.country,alert("There are "+t.length+" shipping rates available for "+e+", starting at "+safa.formatMoney(t[0].price)+".")},safa.onItemAdded=function(t){alert(t.title+" was added to your shopping cart.")},safa.onProduct=function(t){alert("Received everything we ever wanted to know about "+t.title)},safa.formatMoney=function(t,r){function n(t,r){return void 0===t?r:t}function e(t,r,e,o){if(r=n(r,2),e=n(e,","),o=n(o,"."),isNaN(t)||null==t)return 0;var a=(t=(t/100).toFixed(r)).split(".");return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+e)+(a[1]?o+a[1]:"")}"string"==typeof t&&(t=t.replace(".",""));var o="",a=/\{\{\s*(\w+)\s*\}\}/,i=r||this.money_format;switch(i.match(a)[1]){case"amount":o=e(t,2);break;case"amount_no_decimals":o=e(t,0);break;case"amount_with_comma_separator":o=e(t,2,".",",");break;case"amount_with_space_separator":o=e(t,2," ",",");break;case"amount_with_period_and_space_separator":o=e(t,2," ",".");break;case"amount_no_decimals_with_comma_separator":o=e(t,0,".",",");break;case"amount_no_decimals_with_space_separator":o=e(t,0,".","");break;case"amount_with_space_separator":o=e(t,2,",","");break;case"amount_with_apostrophe_separator":o=e(t,2,"'",".")}return i.replace(a,o)},safa.resizeImage=function(t,r){try{if("original"==r)return t;var e=t.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);return e[1]+"_"+r+"."+e[2]}catch(o){return t}},safa.addItem=function(t,r,e){var o={type:"POST",url:"/cart/add.js",data:"quantity="+(r=r||1)+"&id="+t,dataType:"json",success:function(t){"function"==typeof e?e(t):safa.onItemAdded(t)},error:function(t,r){safa.onError(t,r)}};jQuery.ajax(o)},safa.addItemFromForm=function(t,r){var e={type:"POST",url:"/cart/add.js",data:jQuery("#"+t).serialize(),dataType:"json",success:function(t){"function"==typeof r?r(t):safa.onItemAdded(t)},error:function(t,r){safa.onError(t,r)}};jQuery.ajax(e)},safa.getCart=function(r){jQuery.getJSON("/cart.js",function(t){"function"==typeof r?r(t):safa.onCartUpdate(t)})},safa.pollForCartShippingRatesForDestination=function(o,a,t){t=t||safa.onError;var n=function(){jQuery.ajax("/cart/async_shipping_rates",{dataType:"json",success:function(t,r,e){200===e.status?"function"==typeof a?a(t.shipping_rates,o):safa.onCartShippingRatesUpdate(t.shipping_rates,o):setTimeout(n,500)},error:t})};return n},safa.getCartShippingRatesForDestination=function(t,r,e){e=e||safa.onError;var o={type:"POST",url:"/cart/prepare_shipping_rates",data:safa.param({shipping_address:t}),success:safa.pollForCartShippingRatesForDestination(t,r,e),error:e};jQuery.ajax(o)},safa.getProduct=function(t,r){jQuery.getJSON("/products/"+t+".js",function(t){"function"==typeof r?r(t):safa.onProduct(t)})},safa.changeItem=function(t,r,e){var o={type:"POST",url:"/cart/change.js",data:"quantity="+r+"&id="+t,dataType:"json",success:function(t){"function"==typeof e?e(t):safa.onCartUpdate(t)},error:function(t,r){safa.onError(t,r)}};jQuery.ajax(o)},safa.removeItem=function(t,r){var e={type:"POST",url:"/cart/change.js",data:"quantity=0&id="+t,dataType:"json",success:function(t){"function"==typeof r?r(t):safa.onCartUpdate(t)},error:function(t,r){safa.onError(t,r)}};jQuery.ajax(e)},safa.clear=function(r){var t={type:"POST",url:"/cart/clear.js",data:"",dataType:"json",success:function(t){"function"==typeof r?r(t):safa.onCartUpdate(t)},error:function(t,r){safa.onError(t,r)}};jQuery.ajax(t)},safa.updateCartFromForm=function(t,r){var e={type:"POST",url:"/cart/update.js",data:jQuery("#"+t).serialize(),dataType:"json",success:function(t){"function"==typeof r?r(t):safa.onCartUpdate(t)},error:function(t,r){safa.onError(t,r)}};jQuery.ajax(e)},safa.updateCartAttributes=function(t,r){var o="";jQuery.isArray(t)?jQuery.each(t,function(t,r){var e=attributeToString(r.key);""!==e&&(o+="attributes["+e+"]="+attributeToString(r.value)+"&")}):"object"==typeof t&&null!==t&&jQuery.each(t,function(t,r){o+="attributes["+attributeToString(t)+"]="+attributeToString(r)+"&"});var e={type:"POST",url:"/cart/update.js",data:o,dataType:"json",success:function(t){"function"==typeof r?r(t):safa.onCartUpdate(t)},error:function(t,r){safa.onError(t,r)}};jQuery.ajax(e)},safa.updateCartNote=function(t,r){var e={type:"POST",url:"/cart/update.js",data:"note="+attributeToString(t),dataType:"json",success:function(t){"function"==typeof r?r(t):safa.onCartUpdate(t)},error:function(t,r){safa.onError(t,r)}};jQuery.ajax(e)},"1.4"<=jQuery.fn.jquery?safa.param=jQuery.param:(safa.param=function(t){var e=[],r=function(t,r){r=jQuery.isFunction(r)?r():r,e[e.length]=encodeURIComponent(t)+"="+encodeURIComponent(r)};if(jQuery.isArray(t)||t.jquery)jQuery.each(t,function(){r(this.name,this.value)});else for(var o in t)safa.buildParams(o,t[o],r);return e.join("&").replace(/%20/g,"+")},safa.buildParams=function(e,t,o){jQuery.isArray(t)&&t.length?jQuery.each(t,function(t,r){rbracket.test(e)?o(e,r):safa.buildParams(e+"["+("object"==typeof r||jQuery.isArray(r)?t:"")+"]",r,o)}):null!=t&&"object"==typeof t?safa.isEmptyObject(t)?o(e,""):jQuery.each(t,function(t,r){safa.buildParams(e+"["+t+"]",r,o)}):o(e,t)},safa.isEmptyObject=function(t){for(var r in t)return!1;return!0});