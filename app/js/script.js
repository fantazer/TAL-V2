$(document).ready(function () {

	//modals
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	var scrollWidth= window.innerWidth - $(document).width();
	var openModal = function () {
		if (!$('.modal-layer').hasClass('modal-layer-show')) {
			$('.modal-layer').addClass('modal-layer-show');
			modalState.scrollPos = $(window).scrollTop();
			$('body').css({
				overflowY: 'hidden',
				top: -modalState.scrollPos,
				width: '100%',
				paddingRight:scrollWidth
			});

		}
		modalState.isModalShow = true;
	};

	var closeModal = function () {
		$('.modal-layer').removeClass('modal-layer-show');
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos,
			paddingRight:0
		});
		$(window).scrollTop(modalState.scrollPos);
		$('.modal').addClass('modal-hide-animation');
		setTimeout(function(){
			$('.modal').removeClass('modal-hide-animation');
			$('.modal').removeClass('modal__show');
		},600);
		modalState.isModalShow = false;
	};

	var initModal = function (el) {
		openModal();

		$('.modal').each(function () {
			if ($(this).data('modal') === el) {
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);

	};

	$('.modal-get').click(function () {
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-close, .modal-hide').click(function () {
		closeModal();
	});

	$('.modal-wrap').click(function(e){
		e.target.className === 'modal-wrap' ? closeModal() : false
	});

	//modals===end

	// fix top-menu
	var shrinkHeader = 50;
	var head = $('.header');
	var heightHeader = head.height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				$('body').css('paddingTop',heightHeader);
				head.addClass('shrink');
			}
			else {
					$('body').css('paddingTop',0);
					head.removeClass('shrink');
			}
	});
	// fix top-menu === end


// toggle single
	$('.js-toggle').click(function(){
		$(this).toggleClass("active")
	})
	// toggle single === end

	//toggle class + neighbor
	$('.js-commutator-el').click(function(){
		var thisItem = $(this).data("item");
		var thisGroup = $(this).data("group") || false;
		var isEach = $(this).data("each") || false;
		var selector;
		$(this).toggleClass("active")
		if($('.js-commutator-cont').data('group')) {
			selector = $(".js-commutator-cont[data-group=" + thisGroup + "");
		}else{
			selector = $(".js-commutator-cont");
		}
		selector.each(function(){
			if($(this).data("item")=== thisItem){
				$(this).toggleClass('active');
			}else{
				isEach ? $(this).removeClass("active") : false
			}
		})
	})
	//toggle class + neighbor === end

	//toggle class + parent
	$('.js-slide').click(function(){
		var thisItem = $(this).data("item");
		var isEach = $(this).data("each") || false;
		var parrent = $(this).closest(".js-slide-parrent");
		$(this).toggleClass("active")
		var selector;
		selector = $(".js-slide[data-item=" + thisItem + "]")
		if(isEach){
			selector.not(this).removeClass('active')
			selector.not(this).closest(".js-slide-parrent").find(".js-slide-cont").removeClass('active')
		}
		parrent.find(".js-slide-cont[data-item=" + thisItem + "]").toggleClass('active')
	})
	//toggle class + parent === end

// switch
	$('body').on('click', '.js-switch', function (e) {
		if (e.target.className != 'style-input') {
			var typeItem = $(this).data("item");
			var hasParent = $(this).closest('.js-switch-wrap').length
			if (hasParent < 1) {
				var groupItem = $(this).data("group");
				var selector = $('.js-switch[data-group=' + groupItem + ']');
				var size = selector.size()
				selector.each(function () {
					$(this).removeClass("active");
				});
				$('.js-switch-cont').each(function () {
					var hasParentInner = $(this).closest('.js-switch-wrap').length
					if ($(this).data("group") === groupItem && $(this).data("group") != undefined) {
						console.log('inner');
						if ($(this).data("item") === typeItem) {
							if (size === 1) {
								$(this).toggleClass("hidden")
							} else {
								$(this).removeClass("hidden")
							}
						} else {
							$(this).addClass("hidden");
						}
					} else {
						if ($(this).data("item") === typeItem) {
							$(this).toggleClass("hidden");
						}
					}
				});
			} else {
				var parent = $(this).closest('.js-switch-wrap');
				parent.find('.js-switch').removeClass('active')
				parent.find('.js-switch-cont').each(function () {
					if ($(this).data("item") === typeItem) {
						$(this).removeClass("hidden")
					} else {
						$(this).addClass("hidden");
					}
				});
			}
			$(this).addClass("active");
		}
	});
	// switch === end


	// Переключение с кнопки на инкремент
	// increment btn
	$('.incr-btn__el').click(function(){
		$(this).closest(".incr-btn").addClass('incr-btn--active');
	});
	$('.incr-btn .incr__minus').click(function () {
		incrEl.value === 1 ? $(this).closest(".incr-btn").removeClass("incr-btn--active") : ''
	})
	// increment btn === end

	var incrEl= {}
	$('.incr__nav').click(function(){
		incrEl.parent = $(this).closest(".incr");
		incrEl.value = parseInt($(this).closest(".incr").find('.incr__val span').html());
		incrEl.state = $(this).closest(".incr").find('.incr__val span')
	});

	$('.incr__minus').click(function () {
		--incrEl.value;
		if(incrEl.parent.hasClass("incr--one")){
				incrEl.value = incrEl.value < 1 ? 1 : incrEl.value
		}
		incrEl.value = incrEl.value < 1 ? 0 : incrEl.value
		incrEl.state.html(incrEl.value);
	});

	$('.incr__plus').click(function () {
		++incrEl.value;
		incrEl.value = incrEl.value > 100 ? 100 : incrEl.value;
		incrEl.state.html(incrEl.value);
	});

	$('.incr--single .incr__nav').click(function(){
		var parrent = $(this).closest(".incr--single")
		if(incrEl.value){
			parrent.addClass('incr--single-active');
		}else{
			parrent.removeClass('incr--single-active');
		}
	});
	// incr === end

	// dropdown
	$('.dropdown').click(function () {
		$(this).attr('tabindex', 1).focus();
		$(this).toggleClass('active');
		$(this).find('.dropdown-menu').slideToggle(200);
	});
	$('.dropdown').focusout(function () {
		$(this).removeClass('active');
		$(this).find('.dropdown-menu').slideUp(200);
	});
	$('.dropdown .dropdown-menu__el').click(function () {
		var parent = $(this).parents('.dropdown')
		parent.find('.dropdown-current__val').html($(this).html());
		parent.find('input').attr('value', $(this).data('value'));
	});
	// dropdown === end

	// toggle slideDown
	var slideDown = function(target,container,size){
		size = size ? size : 0
		if($(window).width()>size){
			$(document).mouseup(function (e) {
				if (!$(target).is(e.target) && !$(container).is(e.target) && $(container).has(e.target).length === 0) {
						 $(container).slideUp();
				 }
				 if($(target).is(e.target)){
						$(container).slideToggle()
				 }
			});
		}
	}

	slideDown('.js-toggle-search',".header-menu-search input")
	slideDown('.header-nav__more span',".header-nav-sub",769)
	// toggle slideDown === end

	// Toggle search

	// Toggle search === end


	//main slider
	$('.main-slider').slick({
		slidesToShow: 1,
		speed: 500,
		//autoplay: true,
		arrows:false,
		dots:true,
		//fade: true
		//autoplaySpeed: 8000, time between
		customPaging : function(slider, i) {
							return '<span class="dot"></span>';
			}
	});
	//main slider === end

	// sale slider
	$('.sale-slider').slick({
		slidesToShow: 1,
		speed: 500,
		//autoplay: true,
		arrows:false,
		dots:true,
		//fade: true
		//autoplaySpeed: 8000, time between
		customPaging : function(slider, i) {
							return '<span class="dot"></span>';
			}
	});
	// sale slider === end


	// toggle size items
	$('.size__el').click(function () {
		$(this).closest('.size').find('.size__el').removeClass('size__el--active');
		$(this).addClass('size__el--active');
	});
	// toggle size items === end

	// STICK
	var isMobile = function () {
		if ($(window).width() > 1025) {
			$(".stick").stick_in_parent({
				'offset_top': 100
			});
		}

		if ($(window).width() < 769) {
			$(".stick").trigger("sticky_kit:detach");
		}
	};
	$(window).resize(function () {
		isMobile();
		/*if($(window).width() > 769){
			initSlider();
		}*/
	});
	isMobile();
	// STICK === end

	//tab delivery
	$('.order-form__tab-el').click(function(){
		var currentTab = $(this).data('tab');
		if(currentTab=='self'){
			$('.order-form__border-el').addClass('order-form__border-el--right')
		} else {
			$('.order-form__border-el').removeClass('order-form__border-el--right')
		}
		$('.order-form__tab-el').removeClass('order-form__tab-el--active');
		$(this).addClass('order-form__tab-el--active');

		$('.order-form__tab-container').each(function(){
			if($(this).data('tab')==currentTab){
				$(this).addClass('order-form__tab-container-active')
			}else{
				$(this).removeClass('order-form__tab-container-active')
			}
		})
	});
	//tab delivery end

	// range
  $(".range").ionRangeSlider({
 		//prefix: "Списать ",
 		//postfix: " баллов"
 	})
	// range === end

	//history accord
	$('.history-card__wrap').click(function () {
		var current = $(this).closest('.history-card');
		current.closest('.history-card').toggleClass('history-card--active');
		current.find('.history-info').slideToggle(600);
	});
	//history accord===end

	// template scroll
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
	if(!isMac && $(document).width() > 640) {
		$(".scroll").niceScroll({
			autohidemode: false,
			cursorcolor: "#dcdcdc",
			scrollspeed: 160, // scrolling speed
			mousescrollstep: 10,
		});
	}
	// template scroll === end

	// rating
	$('.star--edit .star-el').hover(function () {
		if (!$(this).parent().hasClass('star--fix')) {
			$('.star .star-el').removeClass('star-el--active');
			$(this).addClass('star-el--active');
			$(this).prevAll('.star-el').addClass('star-el--active')
		}
	});
	$('.star--edit .star-el').click(function () {
		$(this).parent().toggleClass('star--fix');
		$(this).addClass('star-el--active');
		$(this).prevAll('.star-el').addClass('star-el--active')
	});
	// rating === end

	// slide menu
	$('.head-toggle').click(function(event){
		event.stopPropagation();
		$(this).toggleClass('head-toggle--open');
		$('.slide-menu').toggleClass('slide-menu--open');
		//$('body').toggleClass('body-fix')
	});

	$('.slide-menu').on("click", function (event) {
		event.stopPropagation();
	});

	$(document).on("click", function () {
			$('.head-wrap').removeClass('head--up');
			$('.head-toggle').removeClass('head-toggle--open');
			$('.slide-menu').removeClass('slide-menu--open');
			//console.log(modalState.isModalShow);
			if(modalState.isModalShow == false){
				$('body').removeClass('body-fix')
		}
	});
	// slide menu === end

	//bubble
	var limit = 2400 * 3600 * 1000; // 24 часа
	var localStorageInitTime = localStorage.getItem('localStorageInitTime');
	//console.log(localStorageInitTime);
	//console.log(+new Date() - localStorageInitTime);
	if (localStorageInitTime === null) {
			localStorage.setItem('localStorageInitTime', +new Date());
	} else if(+new Date() - localStorageInitTime > limit){
			localStorage.setItem('localStorageInitTime', +new Date());
			localStorage.setItem('bubble', '1');
	};

	if(localStorage.getItem('bubble')!='0'){
		setTimeout(function(){
			$('.cookie').addClass('cookie--active');
			//console.log('111');
		},3000);
	}

	$('.cookie .icon-close').click(function(){
		$(this).closest('.cookie').removeClass('cookie--active');
		localStorage.setItem('bubble', '0');
	});
	//bubble===end

	//upload-btn
	$(".upload-btn").change(function () { //Если выбрал файл
		//console.log('img');
		if (this.files && this.files[0]) {
			$('.upload-img').append('<div class="upload-img__el" onclick="this.parentNode.removeChild(this);"></div>');
			var currentUpload = $('.upload-img .upload-img__el:last'); //выбираем куда
			var reader = new FileReader();
			reader.onload = function(){
				currentUpload.attr('style', " background-image:url( "+reader.result+ ") ");
			}
			reader.readAsDataURL(this.files[0]);
		}
	});
	$('.upload-img__el').click(function(){
		//console.log('remove');
		$(this).remove();
	});
	//upload-btn

	// calc adds


	//console.log("Минимум:",minAdds);
	//console.log("Максимум:",maxAdds);
	var isLimitVal = 0;
	$(' .js-ingr-wrap').each(function() {
		isLimitVal += $(this).data("min");
	})
	isLimitVal === 0 ? $(".item-total").removeClass("item-total--disable") : false

	// check is min = max
	$('.js-ingr-wrap').each(function(){
		var minAdds = $(this).data("min");
		var maxAdds = $(this).data("max");
		var currentSizeAdds = 0;
		$(this).find('.incr__val').each(function(){
			currentSizeAdds = currentSizeAdds + $(this).text()*1;
		})
		if(minAdds === maxAdds && currentSizeAdds >= maxAdds){
			$(this).addClass('item-config-row--constant')
		}
	})
	// check is min = max === end

	$('.js-ingr-wrap .incr__nav').click(function(){
		var isAllCheck = true;
		var parent = $(this).closest('.js-switch-cont');
		parent.find('.js-ingr-wrap').each(function(){
			var currentSizeAdds = 0;
			var minAdds = $(this).data("min");
			var maxAdds = $(this).data("max");
			$(this).find('.incr__val').each(function(){
				currentSizeAdds = currentSizeAdds + $(this).text()*1;
			})
			if(currentSizeAdds>=maxAdds && currentSizeAdds != 0){
				$(this).find('.ingr-row').each(function(){
					if($(this).find(".incr__val").text()*1===0){
						$(this).addClass("ingr-row--disable");
					}else{
						$(this).addClass("ingr-row--unPlus");
					}
				})
			}else{
				$(this).find('.ingr-row').removeClass("ingr-row--disable")
				$(this).find('.ingr-row').removeClass("ingr-row--unPlus")
			}
			//console.log(maxAdds);
			if(currentSizeAdds < minAdds  && currentSizeAdds < maxAdds){
				isAllCheck=!isAllCheck;
			}
			//console.log("currentSizeAdds",currentSizeAdds);
			//console.log("isAllCheck",isAllCheck);
		})
		if(isAllCheck){
			parent.find(".item-total").removeClass("item-total--disable");
		}else{
			parent.find(".item-total").addClass("item-total--disable");
		}
	});
	// calc adds === end
	var resetItemIngr = function(){
		$('.ingr-row').removeClass('ingr-row--disable ingr-row--unPlus');
		$(".item-total").removeClass("item-total--disable");
		$('.ingr-row .incr__val span').text(0)
		$('.ingr-row .incr').removeClass('incr--single-active');
		$('.item-total').addClass('item-total--disable');
	}

	window.resetItemMethods = resetItemIngr;
	//window.condition = {};
	//window.condition.info = info;

	// toggle tags
	$('.tag-el').click(function(){
		$(this).toggleClass("tag-el--active");
	});
	// toggle tags === end

	// toggle items type
	$('.tag-el').click(function(){
		var filterType = [];
		var parent = $(this).closest(".content");
		var emptyItem = parent.find(".filter-false");
		parent.find('.tag-el--active').each(function(){
			if($(this).data("condition")!="all") {
				filterType.push($(this).data("condition").toString());
			}
		});
		var strfilterType = filterType.sort().join(' ');
		var filterItem = [];
		parent.find(".product-el").each(function(){
			var current = $(this);
      current.addClass("hidden");
      console.log(current.data("condition"));
			filterItem = current.data("condition").toString().split(' ').sort().join(' ');
			if(filterItem.indexOf(strfilterType)!=-1){
				current.removeClass("hidden");
			}
		});
		if(parent.find(".product-el:not(.hidden)").length<1){
			emptyItem.removeClass("hidden");
		}else{
			emptyItem.addClass("hidden");
		}
	});
	// toggle items type === end

	// toggle ingr drop
	$('.js-item-config-row-head').click(function(){
		$(this).closest('.js-ingr-wrap').find('.js-item-config-row-content').slideToggle()
	});
	// toggle ingr drop === end

	//animate basket
	$('body').on('click', '.js-animateFlyInit', function (e) {
		setTimeout(function () {
			if ($(window).width() > 1281) {
				var flyTarget = $('.cart-wrap--desktop .cart')
			} else {
				var flyTarget = $('.cart-wrap--mobile .cart')
			}
			var flyEl = $(e.target).closest(".js-animateFlyItem");
			flyTarget.removeClass('shake');
			var locationBasket = flyTarget.offset();//find basket
			var flyTargetPosY = locationBasket.top + 'px';
			var flyTargetPosX = locationBasket.left - flyTarget.width() / 2 + 'px';

			var flyElPosY = flyEl.offset().top;
			var flyElPosX = flyEl.offset().left;
			var flyElWidth = flyEl.width();
			var flyElHeight = flyEl.height();

			var animateEl = flyEl
				.clone()
				.appendTo("body")
				.addClass("flyEl-clone")
				.css({
					'z-index': '1001',
					'left': flyElPosX,
					'top': flyElPosY,
					'width': flyElWidth,
					'height': flyElHeight,
				})
				.addClass('flyEl-scale')
			setTimeout(function () {
				animateEl.animate({
					top: flyTargetPosY,
					left: flyTargetPosX,
					width: 80,
					height: 80,
					opacity: .8,
				}, 400, "linear", function () {
					setTimeout(function () {
						animateEl.remove();
					}, 100)
				});
			}, 400)
			setTimeout(function () {
				flyTarget.addClass('shake');
			}, 1000)
		}, 0)
	});
	//animate basket === end


});
