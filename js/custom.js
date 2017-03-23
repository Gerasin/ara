$(document).ready(function() {

	

	// new js

	$('.radio-close').on('click', function () {
		$(this).parents('.radio-wr').find('input').prop('checked', false);
		return false
	});

	$('.js-subscribe-add').on('click', function () {
		$('.subscribe-add').slideDown();
		$('.js-subscribe-add, .js-subscribe-gift').hide();
		$('html, body').animate({'scrollTop' : $('.subscribe-add').offset().top });
		return false
	});
	$('.js-subscribe-gift').on('click', function () {
		$('.subscribe-gift').slideDown();
		$('.js-subscribe-add, .js-subscribe-gift').hide();
		$('html, body').animate({'scrollTop' : $('.subscribe-gift').offset().top });
		return false
	});
	$('.js-autorize-next').on('click', function () {
		$(this).parents('.step-wr').removeClass('active');
		$(this).parents('.step-wr').find('.step-wr__hide').slideUp(400);
		$(this).parents('.step-wr').next('.step-wr').addClass('active');
		$(this).parents('.step-wr').next('.step-wr').find('.step-wr__hide').slideDown(400);
		return false
	}); 
	$('.js-email-next').on('click', function () {
		$(this).parents('.step-wr').removeClass('active');
		$(this).parents('.step-wr').find('.step-wr__hide').slideUp(400);
		$(this).parents('.step-wr').next('.step-wr').addClass('active');
		$(this).parents('.step-wr').next('.step-wr').find('.step-wr__hide').slideDown(400);
		return false
	});

	

	// end new js


	$('.subscribe-send').on('click', function () {
		var subscribeCheck = $(this).parents('form').find('input[type="radio"]:checked').length;
		if(subscribeCheck == 0) {
			$('.message-error').fadeIn();
		} else {	
			$('.message-ok').fadeIn();
		};
		setTimeout("$('.subscribe-message').fadeOut()", 5000);
		return false
	});
	$('.subscribe-message__close').on('click', function () {
		$('.subscribe-message').fadeOut();
		return false
	});



	// Валидация
	$('.valid-btn').on('click', function () {
		$('.input-wrap__erro').remove();
		$('.inp-error').removeClass('inp-error');
		var way = $(this).parents('form');
		var valIndex = 0;
		var errorTxt;
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		way.find('input').removeClass('inp-error');
		way.find('.error-txt').fadeOut();
		way.find('.valid-txt').each(function() {
			var lengthVal = $(this).val().length;
			if(lengthVal < 2) {
				$(this).parent().addClass('inp-error');
				errorTxt = $(this).attr('date-error');
				$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
				valIndex = 1
			}
		});
		way.find('.valid-mail').each(function() {
			console.log('test');
			var lengthVal = $(this).val().length;
			if(lengthVal < 2) {
				$(this).parent().find('.error-txt').fadeIn();
				$(this).parent().addClass('inp-error');
				errorTxt = $(this).attr('date-error');
				$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
				valIndex = 1
			} else {
				if(!pattern.test($(this).val())){
		            $(this).parent().find('.error-txt').fadeIn();
		            $(this).parent().addClass('inp-error');
		            errorTxt = $(this).attr('date-error');
					$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
		            valIndex = 1
		        }
	        }
		});
		way.find('.valid-phone').each(function() {
			var lengthVal = $(this).val().length;
			if(lengthVal < 7) {
				$(this).parent().find('.error-txt').fadeIn();
				$(this).addClass('inp-error');
				valIndex = 1
			}
		});   

		/*if(valIndex == 0) {
			$('#modal-popup').modal('show')
		};*/

		return false
	});





	
	$('.lnk-open-m').on('click', function () {
		$(this).next('ul').slideToggle();
		$(this).parent().toggleClass('act');
		return false;
	});

	$('.menu-sandwich').on('click', function () {
		if($(this).hasClass('show')) {
			$(this).removeClass('show');
			$('.menu-mobile').fadeOut();
		} else {
			$(this).addClass('show');
			$('.menu-mobile').fadeIn();
		};
		$('.menu-mobile').toggleClass('act');
		return false;
	});
	$('.menu-mobile-close').on('click', function () {
		$('.menu-sandwich').removeClass('show');
		$('.menu-mobile').fadeOut();
		$('.menu-mobile').removeClass('act');
		return false;
	});


	$('.curusel-body').slick({
	  	infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1
	});
	var slickItem = $('.curusel-body__item').length
	slickItem = slickItem - 2;
	var coruselNav = '1' + '<span> / </span>' +  slickItem;
	$('.curusel-wrap__namber').html(coruselNav);
	$('.curusel-body').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var slickItem = $('.curusel-body__item').length
		slickItem = slickItem - 2;
		var coruselNav = ++nextSlide + '<span> / </span>' + slickItem;
		$('.curusel-wrap__namber').html(coruselNav);
	});


	// menu tabs
	$('.lk-tab a').on('click', function () {
		$('.lk-tab a').removeClass('active');
		$(this).addClass('active');
		$('.lk-tab-wrap').hide();
		var idOpen = $(this).attr('href');
		$(idOpen).show();
		return false;
	});
	$('.lk-tab-wrap:last(:not)').hide();


	$('.subscribe__faq-head a').on('click', function () {
		$(this).parent().toggleClass('active');
		$(this).parent().next().slideToggle();
		return false;
	});

	$('.anchor-menu a').on('click', function () {
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
		return false;
	});

	

})

$(window).load(function() {
	
	 submenu()

});
$(window).resize(function(){
	 submenu()
});

function submenu() {
	var submenuPad = $('.menu-main li:first').offset().left - $('.menu-main').offset().left;
	$('.submenu').css({'padding-left' : submenuPad + 'px'});
	$('.menu-main ul').css({'padding-left' : submenuPad + 'px'});
	console.log(submenuPad);
}


