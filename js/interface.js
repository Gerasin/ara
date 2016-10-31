$(document).ready(function() {
	// detect touch device
	if (isTouchDevice() === true) {
		$('body').addClass('touch');
	} else {
		$('body').addClass('no-touch');
	}


	//MAIN-SILDER
	if($('.main-banner-wrapper').length) (
		$('.main-banner-wrapper').slick({
			infinite: true,
			dots: false,
			autoplay: false,
			speed: 600,
		})
	);


	//PARTNERS-SLIDER
	if($('.partners-slider').length) (
		$('.partners-slider').slick({
			infinite: true,
			slidesToShow: 7,
			slidesToScroll: 1,
			responsive: [
			    {
			      breakpoint: 900,
			      settings: {
			        slidesToShow: 6,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 750,
			      settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 500,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 450,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			]
		})
	);


	//NEWS-SLIDER
	if($('.main-news__slider').length) (
		$('.main-news__slider').slick({
			infinite: false,
			dots: false,
			autoplay: false,
			speed: 600,
			responsive: [
			    {
			      breakpoint: 500,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			      }
			    },
			]
		})
	);




	//PHOTO-SLIDER
	var $status = $('.pagingInfo');
    var $slickElement = $('.photo-slider');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });
	
	if($('.photo-wrapper').length>0) (
		$slickElement.slick({
			infinite: false,
			dots: false,
			autoplay: false,
			speed: 600,
			prevArrow: $ ('.prev'),
			nextArrow: $ ('.next'),
		})
	);



	//POPUP
    $('.fbox').fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade',
		maxWidth: 680,
		padding:0,
		beforeShow: function(){
		    $("body").css({'overflow-y':'hidden'});
		},
		afterClose: function(){
		    $("body").css({'overflow-y':'auto'});
		},
		helpers : {
	        overlay : {
	            locked: false
	        }
	    }
	});



	//validate-QUESTION
	if ($("#validate-form").length>0) {
		$("#validate-form").validate({
	       rules:{
	            validate_name:{
	                required: true,
	            },
	            validate_email:{
	                required: true,
	            },
	            validate_msg:{
	                required: true,
	            },
	       },
	       messages:{
	            validate_name:{
	                required: "Поле не заполнено",
	            },
	            validate_email:{
	                required: "Поле не заполнено",
	            },
	            validate_msg:{
	                required: "Поле не заполнено",
	            },
	       }
	    });
	};



	//BUY-PAGE ANCHOR
	$('.link-scroll').click(function () { 
	     elementClick = $(this).attr("href");
	     destination = $(elementClick).offset().top;
	     $('body, html').animate( { scrollTop: destination }, 1100 );
	     return false;
   	});


	


	//MOBILE-MENU
	$( 'body' ).on( 'click', '.mobile-btn', function() {
	    $(this).find('.burger-icon').toggleClass('active');
	    //$('body').toggleClass('fb-hidden');
	    $(this).next('.mobile-menu__list').fadeToggle( 100, function() {
	    	// if ($('.mobile-menu__list').is(':visible')) {
	    	// 	$('.mobile-btn').find('span').text('Закрыть');
	    	// }else $('.mobile-btn').find('span').text('Меню');
		});
	   	return false;
	});
	$(document).click(function (e){
		var div = $(".mobile-menu__list");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.mobile-menu__list').fadeOut(100);
			$('.burger-icon').removeClass('active');
			$('.mobile-btn').find('span').text('Меню');
		}
	});



	//CONTACTS-MAP
	if ($('#map_canvas').length>0) {
		ymaps.ready(function () {
	        var myMap = new ymaps.Map('map_canvas', {
	                center: [55.741997, 37.62819],
	                zoom: 17
	            }),

	            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	                hintContent: 'Собственный значок метки'
	            }, {
	                iconLayout: 'default#image',
	                iconImageHref: 'img/content/mark.png',
	                iconImageSize: [34, 55],
	                iconImageOffset: [-17, -65]
	            });

	        myMap.geoObjects.add(myPlacemark);


	        if ($(window).width() < 751) {
				myMap.behaviors.disable('scrollZoom');
			}

	        $(window).resize(function() {
			    if ($(window).width() < 751) {
				   myMap.behaviors.disable('scrollZoom');
				}
			});
	    });
	};



	//pres-contacts toggle
	$('.press-cont-link').click(function(){
		$(this).next('.press-cont-open').slideToggle();
		return false;
	})



	if ($('.select').length>0) {
		$('.select').selectik();
	};
	

})



// functions
function isTouchDevice() {
	return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}




//ABOUT-PAGE GRID
$(window).load(function() {
	if ($('.tile-list').length>0) {
		// $('.tile-item img').load(function(){
			$('.tile-list').masonry({
				itemSelector: '.tile-item',
			});
		// })
	};
});
	



//REMOVE
$('body').append(
	'<div style="position: fixed; z-index: 9999; bottom: 0; right: 0; background: #fff; border: solid 1px #000; width: 250px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;position:relative;z-index:20;" onclick="$(this).parent().hide()">Закрыть X</a> \
	<ol> \
		<li><a href="index.html" style="color:#000;">Index</a></li> \
		<li><a href="online.html" style="color:#000;">Online</a></li> \
		<li><a href="online_guest.html" style="color:#000;">Online guest</a></li> \
		<li><a href="news.html" style="color:#000;">News</a></li> \
		<li><a href="news-in.html" style="color:#000;">News-in</a></li> \
		<li><a href="avangard-life.html" style="color:#000;">Avangard-life</a></li> \
		<li><a href="project.html" style="color:#000;">Project</a></li> \
		<li><a href="about.html" style="color:#000;">About</a></li> \
		<li><a href="buy.html" style="color:#000;">Buy</a></li> \
		<li><a href="contacts.html" style="color:#000;">Contacts</a></li> \
		<li><a href="press-center.html" style="color:#000;">Press-center</a></li> \
		<li><a href="page404.html" style="color:#000;">Page404</a></li> \
		<li><a href="text-page.html" style="color:#000;">Text-page</a></li> \
	</ol> \
</div>');
