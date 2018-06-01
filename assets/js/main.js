jQuery.expr.filters.offscreen = function(el) {
    var rect = el.getBoundingClientRect();
    return (
        (rect.x + rect.width) < 0 ||
        (rect.y + rect.height) < 0 ||
        (rect.x > window.innerWidth || rect.y > window.innerHeight)
    );
};

jQuery(document).ready(function($) {
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');
    header = $('header'),
        map = $('#map'),
        map_c = $('#map-constraint'),
        map_texts = $('.spark-indv-text-container'),
        bigfour = $('#section5'),
        bigfour_top = bigfour.offset().top,

        navigationItems.hide();
    // contentSections.hide();

    map.stick_in_parent({
        offset_top: $(window).height() / 8
    });

    //smooth scroll to second section
    $('#begin-button').on('click', function(event) {
        event.preventDefault();
        // contentSections.show();

        header.fadeOut();
        setTimeout(
            function() {
                contentSections.fadeIn();
                map_c.hide();
                AOS.refresh();
            }, 500);
    });

    //smooth scroll to second section
    $('#scroll-down').on('click', function(event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function smoothScroll(target) {
        $('body,html').animate({
                'scrollTop': target.offset().top
            },
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

    if ((!$('#section5').is(':offscreen'))) {
        map_c.show();
    }

    if ((!$('#section6').is(':offscreen'))) {
        AOS.refresh();
    }

    var c = 1;
    map_texts.each(function() {
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