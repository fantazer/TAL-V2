$(document).ready(function(){var t={isModalShow:!1,scrollPos:0},i=window.innerWidth-$(document).width(),e=function(){$(".modal-layer").hasClass("modal-layer-show")||($(".modal-layer").addClass("modal-layer-show"),t.scrollPos=$(window).scrollTop(),$("body").css({overflowY:"hidden",top:-t.scrollPos,width:"100%",paddingRight:i})),t.isModalShow=!0},s=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").css({overflow:"",position:"",top:t.scrollPos,paddingRight:0}),$(window).scrollTop(t.scrollPos),$(".modal").addClass("modal-hide-animation"),setTimeout(function(){$(".modal").removeClass("modal-hide-animation"),$(".modal").removeClass("modal__show")},600),t.isModalShow=!1},a=function(t){e(),$(".modal").each(function(){$(this).data("modal")===t?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var i=$(window).height();$(".modal-filter").height(i)};$(".modal-get").click(function(){var t=$(this).data("modal");a(t)}),$(".modal-close, .modal-hide").click(function(){s()}),$(".modal-wrap").click(function(t){"modal-wrap"===t.target.className&&s()});var o=50,l=$(".header"),n=l.height();$(window).scroll(function(){var t=$(this).scrollTop();t>=o?($("body").css("paddingTop",n),l.addClass("shrink")):($("body").css("paddingTop",0),l.removeClass("shrink"))}),$(".js-toggle").click(function(){$(this).toggleClass("active")}),$(".js-commutator-el").click(function(){var t,i=$(this).data("item"),e=$(this).data("group")||!1,s=$(this).data("each")||!1;$(this).toggleClass("active"),t=$(".js-commutator-cont").data("group")?$(".js-commutator-cont[data-group="+e):$(".js-commutator-cont"),t.each(function(){$(this).data("item")===i?$(this).toggleClass("active"):!!s&&$(this).removeClass("active")})}),$(".js-slide").click(function(){var t=$(this).data("item"),i=$(this).data("each")||!1,e=$(this).closest(".js-slide-parrent");$(this).toggleClass("active");var s;s=$(".js-slide[data-item="+t+"]"),i&&(s.not(this).removeClass("active"),s.not(this).closest(".js-slide-parrent").find(".js-slide-cont").removeClass("active")),e.find(".js-slide-cont[data-item="+t+"]").toggleClass("active")}),$("body").on("click",".js-switch",function(t){if("style-input"!=t.target.className){var i=$(this).data("item"),e=$(this).closest(".js-switch-wrap").length;if(e<1){var s=$(this).data("group"),a=$(".js-switch[data-group="+s+"]"),o=a.size();a.each(function(){$(this).removeClass("active")}),$(".js-switch-cont").each(function(){$(this).closest(".js-switch-wrap").length;$(this).data("group")===s&&void 0!=$(this).data("group")?(console.log("inner"),$(this).data("item")===i?1===o?$(this).toggleClass("hidden"):$(this).removeClass("hidden"):$(this).addClass("hidden")):$(this).data("item")===i&&$(this).toggleClass("hidden")})}else{var l=$(this).closest(".js-switch-wrap");l.find(".js-switch").removeClass("active"),l.find(".js-switch-cont").each(function(){$(this).data("item")===i?$(this).removeClass("hidden"):$(this).addClass("hidden")})}$(this).addClass("active")}}),$(".incr-btn__el").click(function(){$(this).closest(".incr-btn").addClass("incr-btn--active")}),$(".incr-btn .incr__minus").click(function(){1===r.value?$(this).closest(".incr-btn").removeClass("incr-btn--active"):""});var r={};$(".incr__nav").click(function(){r.parent=$(this).closest(".incr"),r.value=parseInt($(this).closest(".incr").find(".incr__val span").html()),r.state=$(this).closest(".incr").find(".incr__val span")}),$(".incr__minus").click(function(){--r.value,r.parent.hasClass("incr--one")&&(r.value=r.value<1?1:r.value),r.value=r.value<1?0:r.value,r.state.html(r.value)}),$(".incr__plus").click(function(){++r.value,r.value=r.value>100?100:r.value,r.state.html(r.value)}),$(".incr--single .incr__nav").click(function(){var t=$(this).closest(".incr--single");r.value?t.addClass("incr--single-active"):t.removeClass("incr--single-active")}),$(".dropdown").click(function(){$(this).attr("tabindex",1).focus(),$(this).toggleClass("active"),$(this).find(".dropdown-menu").slideToggle(200)}),$(".dropdown").focusout(function(){$(this).removeClass("active"),$(this).find(".dropdown-menu").slideUp(200)}),$(".dropdown .dropdown-menu__el").click(function(){var t=$(this).parents(".dropdown");t.find(".dropdown-current__val").html($(this).html()),t.find("input").attr("value",$(this).data("value"))});var c=function(t,i,e){e=e?e:0,$(window).width()>e&&$(document).mouseup(function(e){$(t).is(e.target)||$(i).is(e.target)||0!==$(i).has(e.target).length||$(i).slideUp(),$(t).is(e.target)&&$(i).slideToggle()})};c(".js-toggle-search",".header-menu-search input"),c(".header-nav__more span",".header-nav-sub",769),$(".main-slider").slick({slidesToShow:1,speed:500,arrows:!1,dots:!0,customPaging:function(t,i){return'<span class="dot"></span>'}}),$(".sale-slider").slick({slidesToShow:1,speed:500,arrows:!1,dots:!0,customPaging:function(t,i){return'<span class="dot"></span>'}}),$(".size__el").click(function(){$(this).closest(".size").find(".size__el").removeClass("size__el--active"),$(this).addClass("size__el--active")});var d=function(){$(window).width()>1025&&$(".stick").stick_in_parent({offset_top:100}),$(window).width()<769&&$(".stick").trigger("sticky_kit:detach")};$(window).resize(function(){d()}),d(),$(".order-form__tab-el").click(function(){var t=$(this).data("tab");"self"==t?$(".order-form__border-el").addClass("order-form__border-el--right"):$(".order-form__border-el").removeClass("order-form__border-el--right"),$(".order-form__tab-el").removeClass("order-form__tab-el--active"),$(this).addClass("order-form__tab-el--active"),$(".order-form__tab-container").each(function(){$(this).data("tab")==t?$(this).addClass("order-form__tab-container-active"):$(this).removeClass("order-form__tab-container-active")})}),$(".range").ionRangeSlider({}),$(".history-card__wrap").click(function(){var t=$(this).closest(".history-card");t.closest(".history-card").toggleClass("history-card--active"),t.find(".history-info").slideToggle(600)});var h=navigator.platform.toUpperCase().indexOf("MAC")>=0;!h&&$(document).width()>640&&$(".scroll").niceScroll({autohidemode:!1,cursorcolor:"#dcdcdc",scrollspeed:160,mousescrollstep:10}),$(".star--edit .star-el").hover(function(){$(this).parent().hasClass("star--fix")||($(".star .star-el").removeClass("star-el--active"),$(this).addClass("star-el--active"),$(this).prevAll(".star-el").addClass("star-el--active"))}),$(".star--edit .star-el").click(function(){$(this).parent().toggleClass("star--fix"),$(this).addClass("star-el--active"),$(this).prevAll(".star-el").addClass("star-el--active")}),$(".head-toggle").click(function(t){t.stopPropagation(),$(this).toggleClass("head-toggle--open"),$(".slide-menu").toggleClass("slide-menu--open")}),$(".slide-menu").on("click",function(t){t.stopPropagation()}),$(document).on("click",function(){$(".head-wrap").removeClass("head--up"),$(".head-toggle").removeClass("head-toggle--open"),$(".slide-menu").removeClass("slide-menu--open"),0==t.isModalShow&&$("body").removeClass("body-fix")});var m=864e7,u=localStorage.getItem("localStorageInitTime");null===u?localStorage.setItem("localStorageInitTime",+new Date):+new Date-u>m&&(localStorage.setItem("localStorageInitTime",+new Date),localStorage.setItem("bubble","1")),"0"!=localStorage.getItem("bubble")&&setTimeout(function(){$(".cookie").addClass("cookie--active")},3e3),$(".cookie .icon-close").click(function(){$(this).closest(".cookie").removeClass("cookie--active"),localStorage.setItem("bubble","0")}),$(".upload-btn").change(function(){if(this.files&&this.files[0]){$(".upload-img").append('<div class="upload-img__el" onclick="this.parentNode.removeChild(this);"></div>');var t=$(".upload-img .upload-img__el:last"),i=new FileReader;i.onload=function(){t.attr("style"," background-image:url( "+i.result+") ")},i.readAsDataURL(this.files[0])}}),$(".upload-img__el").click(function(){$(this).remove()});var v=0;$(" .js-ingr-wrap").each(function(){v+=$(this).data("min")}),0===v&&$(".item-total").removeClass("item-total--disable"),$(".js-ingr-wrap").each(function(){var t=$(this).data("min"),i=$(this).data("max"),e=0;$(this).find(".incr__val").each(function(){e+=1*$(this).text()}),t===i&&e>=i&&$(this).addClass("item-config-row--constant")}),$(".js-ingr-wrap .incr__nav").click(function(){var t=!0,i=$(this).closest(".js-switch-cont");i.find(".js-ingr-wrap").each(function(){var i=0,e=$(this).data("min"),s=$(this).data("max");$(this).find(".incr__val").each(function(){i+=1*$(this).text()}),i>=s&&0!=i?$(this).find(".ingr-row").each(function(){1*$(this).find(".incr__val").text()===0?$(this).addClass("ingr-row--disable"):$(this).addClass("ingr-row--unPlus")}):($(this).find(".ingr-row").removeClass("ingr-row--disable"),$(this).find(".ingr-row").removeClass("ingr-row--unPlus")),i<e&&i<s&&(t=!t)}),t?i.find(".item-total").removeClass("item-total--disable"):i.find(".item-total").addClass("item-total--disable")});var f=function(){$(".ingr-row").removeClass("ingr-row--disable ingr-row--unPlus"),$(".item-total").removeClass("item-total--disable"),$(".ingr-row .incr__val span").text(0),$(".ingr-row .incr").removeClass("incr--single-active"),$(".item-total").addClass("item-total--disable")};window.resetItemMethods=f,$(".tag-el").click(function(){$(this).toggleClass("tag-el--active")}),$(".tag-el").click(function(){var t=[],i=$(this).closest(".content"),e=i.find(".filter-false");i.find(".tag-el--active").each(function(){"all"!=$(this).data("condition")&&t.push($(this).data("condition").toString())});var s=t.sort().join(" "),a=[];i.find(".product-el").each(function(){var t=$(this);t.addClass("hidden"),console.log(t.data("condition")),a=t.data("condition").toString().split(" ").sort().join(" "),a.indexOf(s)!=-1&&t.removeClass("hidden")}),i.find(".product-el:not(.hidden)").length<1?e.removeClass("hidden"):e.addClass("hidden")}),$(".js-item-config-row-head").click(function(){$(this).closest(".js-ingr-wrap").find(".js-item-config-row-content").slideToggle()});var g=function(){$(".js-animateFlyInit").click(function(t){if($(window).width()>1281)var i=$(".cart-wrap--desktop .cart ");else var i=$(".cart-wrap--mobile .cart ");var e=$(t.target).closest(".js-animateFlyItem");i.removeClass("shake");var s=i.offset(),a=s.top+"px",o=s.left-i.width()/2+"px",l=e.offset().top,n=e.offset().left,r=e.width(),c=e.height(),d=e.clone().appendTo("body").addClass("flyEl-clone").css({"z-index":"1001",left:n,top:l,width:r,height:c}).addClass("flyEl-scale");setTimeout(function(){d.animate({top:a,left:o,width:80,height:80,opacity:.8},400,"linear",function(){setTimeout(function(){d.remove()},100)})},400),setTimeout(function(){i.addClass("shake")},1e3)})};g()});