$(document).ready(function() {
	
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
	console.log(submenuPad);
}

