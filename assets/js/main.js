jQuery.expr.filters.offscreen = function(el) {
  var rect = el.getBoundingClientRect();
  return (
           (rect.x + rect.width) < 0 
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
         );
};

jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');
    header = $('header'),
    map = $('#map'),
    map_texts = $('.spark-indv-text-container'),
    bigfour = $('#section5'),
    bigfour_top = bigfour.offset().top,

	// navigationItems.hide();
  // contentSections.hide();
  
  map.stick_in_parent({
    offset_top: $(window).height()/8
  });

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //smooth scroll to second section
    $('#begin-button').on('click', function(event){
      contentSections.show();
      event.preventDefault();
      smoothScroll($(this.hash));
    });

    //smooth scroll to second section
    $('#scroll-down').on('click', function(event){
      event.preventDefault();
      smoothScroll($(this.hash));
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	1000
        );
	}
});


$(document).scroll(function() {
  // header disappears on scroll
  header.css("opacity", 1 - $(window).scrollTop() / 500);

  var y = $(this).scrollTop();
  if (y > $(window).height() - 10) {
    $('#cd-vertical-nav').fadeIn();
  } else {
    $('#cd-vertical-nav').fadeOut();
  }

  if (y > bigfour_top - 500) {
    // $('#map-c').fadeOut();
  } else {
    // $('#map-c').fadeIn();
  }

  var c = 1;
  map_texts.each(function(){
    $this = $(this);
    if ((!$('#spark-' + c).is(':offscreen'))) {
      $('#tooltip-' + c).css({
          opacity: '1'
      });
    } else {
      $('#tooltip-' + c).css({
          opacity: '0'
      });
    }
    c++;
  });
});
