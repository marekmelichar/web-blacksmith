$( document ).ready(function() {
	$('#cssmenu li.has-sub>a').on('click', function(){
			//$(this).removeAttr('href');
			event.preventDefault();
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});
    
// --------------------------------------------------------------------------





/* STICKY navi */
    
$('nav').removeClass('sticky');

$('.sticky_trigger').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
   offset: '4%' 
});  





// --------------------------------------------------------------------------





// vytiahneme si gallery element 
	var gallery  = $('.gallery'),
		selected = $('#cssmenu').find('.selected');

	// po kliknuti na link v menu 
	$('#cssmenu a').on('click', function(event) {
		
		// nechceme byt presmerovani na stranku
		event.preventDefault();

		// vytiahneme url adresu ktoru chceme ist prezriet ajaxom
		var a      = $(this),
			href   = a.attr('href'),
			parent = a.parent('li');

		// ak chceme zobrazit uz zobrazene, kasleme na to
		if ( selected.is( parent ) ) return;

		// vyznacime noveho parenta
		selected = parent;

		// oznacime link na ktory sme klikli ako selected
		parent.addClass('selected')
			  .siblings().removeClass('selected');

		// nechame zmiznut aktualnu galeriu
		gallery.find('.gallery-set').fadeOut();

		// ajax request, vytiahneme iba .gallery-set
		$.ajax({
			url: href,
			type: 'GET',
			dataType: 'html',
			success: function(data) {
				
				// najdeme novy gallery set a vlozime ho do .gallery
				var newGallery = $(data).find('.gallery-set');
					gallery.html( newGallery );
				
				// pridame gallery setu class s fejdovanim
				newGallery.addClass('fadeIn' + selected.data('from').capitalize());

			}
		});
	});	
 

// ---------------------- opacity v gallery ------------------------------------

// var gallery = $('.gallery'),
// 	startingOpacity = gallery.find('img').css('opacity');

// gallery.find('img').on('mouseenter mouseleave', function(event) {
// 	var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
// 	$(this).stop().fadeTo(200, opacity);
// });	





// ------------------------- scroll animace ---------------------------------

$('.js--scroll-to-contact').click(function() { 
	$('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
});

$('.js--scroll-to-gallery').click(function() { 
	$('html, body').animate({scrollTop: $('.js--section-gallery').offset().top}, 1000);
});





// ------------------------- anchor smooth scroll animace ---------------------------------

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




// ---------------------------------- zpet nahoru ---------------------------------


	// vytvorime link, cez ktory sa vieme vyscrollovat na vrch stranky
	var backToTop = $('<a>', { 
			href: '#home', 
			class: 'back-to-top',
			html: '<i class="fa fa-caret-up fa-5x"></i>'
		});

	// link pridame na stranku a naviazeme nan scrollovaciu funkciu
	backToTop
		.hide()
		.appendTo('body')
		.on('click', function() {
			$('html,body').animate({ scrollTop: 0 });
		});

	// zobrazime ho iba ak sme dostatocne hlboko v stranke
	var win = $(window);
	win.scroll(function() {
		if ( win.scrollTop() >= 500 ) backToTop.fadeIn();
		else backToTop.hide();
	});





// ---------------------------------- MOBILE NAV ---------------------------------

    
    
    
    
  $('.js--nav-icon').on('click', function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
});




    
});






  