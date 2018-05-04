jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');
        header = $('header'),
	// navigationItems.hide();
  // contentSections.hide();

  $(window).scroll(function(){
    header.css("opacity", 1 - $(window).scrollTop() / 500);
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
      // event.preventDefault();
      
      // function contentFadeIn(){
      //   contentSections.fadeIn();
      //   navigationItems.fadeIn();
      //   updateNavigation();
      // };

      // window.setTimeout( contentFadeIn, 1000 );
      event.preventDefault();
      smoothScroll($(this.hash));
      // header.fadeOut();
    });

    //smooth scroll to second section
    $('#scroll-down').on('click', function(event){
      event.preventDefault();
      smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
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
  var y = $(this).scrollTop();
  if (y > $(window).height() - 10) {
    $('#cd-vertical-nav').fadeIn();
  } else {
    $('#cd-vertical-nav').fadeOut();
  }
});