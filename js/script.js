var $goTop = $('#go-top'),
	$preloader = $('#preloader');

var $window = $(window),
	windowWidth = $window.width(),
	windowTop = $window.scrollTop();

var App = {
	
	start: function() {
		
		// on window load
		App.onLoad();
		// on page scroll
		App.onScroll();
		// on document ready
		App.onMousewheel();
		// initaite slider
		App.sliderInit();
		// bind all events
		App.bind();
		// navigation scroll to any section by .anchor class and #
		App.anchorScroll();
		// scroll to top button
		App.goTop(windowTop);
		// sticky header menu
		App.sticky();
		
	},
	
	preloaderFinish: function() {
		
		$preloader.remove();
		
	},
	
	sticky: function() {
		
		if($(window).scrollTop() > 40) {
			$('#header').addClass('sticky');
		}else{
			$('#header').removeClass('sticky');
		}
		
	},
	
	sliderInit: function() {
		
		$('#carousel').height($(window).height());
		
		if($('#carousel').length) {
			$.mbBgndGallery.buildGallery({
				containment:"#carousel",
				timer:8000,
				effTimer:500,
				controls:"#controls",
				grayScale:false,
				shuffle:false,
				preserveWidth:false,
				effect:"fade",
				images:[
					"img/carousel/slide-1.jpg",
					"img/carousel/slide-2.jpg",
					"img/carousel/slide-1.jpg",
					"img/carousel/slide-4.jpg",
				],
				thumbs:{folderPath:"img/carousel/thumbs/", placeholder:"#thumbnails"}
				
			});
		}
		
	},
	
	slideText: function(index) {
		
		$('.slide-text').stop(true,true).animate({'top': (index-1)*-305}, 50, 'easeOutExpo');
		
	},
  
	onScroll: function() {
		
		$window.on('scroll', function() {
			App.sticky();
			App.goTop($(window).scrollTop());
		});
		
	},
  
	onLoad: function() {
		
		$(window).load(function() {
			App.preloader();
		});
		
	},
  
	onMousewheel: function() {
		$('html, body').bind('DOMMouseScroll mousewheel', function() {
			$('html, body').stop(true,false);
		});
	},
  
	bind: function() {
		
		$(document).on('click', 'a[href="#"]', function(e) {
			e.preventDefault();
		});
		
		$('.left ul a', $('#carousel')).bind('click', function(e) {
			e.preventDefault();
			App.carouselSwitch($(this).parent().attr('class'));
		});
		
		// go top bind
		$goTop.bind('click', function() {
			$('html, body').animate({scrollTop: 0}, 1200, 'easeOutExpo');
		});
		
		$('#navigation a').bind('click', function() {
			$('html, body').stop(true,false);
		});
		
		/* mobile menu */
		$("#nav-mobile").on("click", function() {
			$('#navigation').toggleClass('visible');
		});
		$('#navigation a').bind('click', function() {
			$('#navigation').toggleClass('visible');
		});
		/* mobile menu footer */
		$("#nav-mobile-footer").on("click", function() {
			$('#navigation-footer').toggleClass('visible');
		});
		$('#navigation-footer a').bind('click', function() {
			$('#navigation-footer').toggleClass('visible');
		});
	},
	
	preloader: function() {
		$preloader.delay(300).fadeOut(500, function() {
			App.preloaderFinish();
		});
	},

	goTop: function(windowTop) {
		
		if(windowTop > 300) {
			$goTop.css('opacity', 0.2);
		}else{
			$goTop.css('opacity', 0);
		}
		
		var footerPosition = ($(document).height() - $window.height()) - $('footer').height();
		
		if(windowTop >= footerPosition) {
			$goTop.addClass('bottom');
		}else{
			$goTop.removeClass('bottom');
		}
		
	},
	
	anchorScroll: function() {
		
		$(".anchor").click(function(event) {
		
			var full_url = this.href,
			parts = full_url.split("#"),
			trgt = parts[1],
			targetElement = $("#"+trgt),
			target_offset = targetElement.offset(),
			target_top = target_offset.top - 50;
			
			if(targetElement.length) {
				
				event.preventDefault();
				
				$('html, body').animate({scrollTop:target_top}, 1000, 'easeOutExpo');
				
			}
		});
	},
	
	mobileMenu: function() {
		
		if($('#navigation').hasClass('visible')) {
			$('#navigation').removeClass('visible');
		}
		if($('#navigation-footer').hasClass('visible')) {
			$('#navigation-footer').removeClass('visible');
		}
	},
};

$.fn.is_on_screen = function(){
     
    var win = $(window);
     
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
     
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
     
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
     
};

/* navigation highlight */
var headers = {};
var sections = {};
var footers = {},
_height = $(window).height(),
i = 0;

$(document).ready(function() {
	
    $('header').each(function(){
        headers[this.id] = $(this).offset().top;
    });
	
	navHighlightH();

    $(document).scroll(function() {
        navHighlightH();
    });
    
    $('section').each(function(){
        sections[this.id] = $(this).offset().top;
    });
	
	navHighlight();

    $(document).scroll(function() {
        navHighlight();
    });
    
    $('footer').each(function(){
        footers[this.id] = $(this).offset().top;
    });
	
	navHighlightF();

    $(document).scroll(function() {
        navHighlightF();
    });

});

function navHighlightH() {
	
	var pos = $(document).scrollTop() - ($window.height());
	
	for(var i in headers) {
		
		if(headers[i] > pos && headers[i] < pos + _height) {
			$('#navigation a').removeClass('active');
			$('#navigation a[href$="#' + i + '"]').addClass('active');
		}
	}
}

function navHighlight() {
	
	var pos = $(document).scrollTop() - ($window.height() - 70);
	
	for(var i in sections) {
		
		if(sections[i] > pos && sections[i] < pos + _height) {
			$('#navigation a').removeClass('active');
			$('#navigation a[href$="#' + i + '"]').addClass('active');
		}
	}
}

function navHighlightF() {
	
	var pos = $(document).scrollTop() - ($window.height() - 70);
	
	for(var i in footers) {
		
		if(footers[i] > pos && footers[i] < pos + _height) {
			$('#navigation a').removeClass('active');
			$('#navigation a[href$="#' + i + '"]').addClass('active');
		}
	}
}