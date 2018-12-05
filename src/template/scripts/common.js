$(document).ready(function($) {

	$('.dropdown-trigger').dropdown();

	var sidenav = $('.sidenav');
	sidenav.sidenav();

	$('.sidenav__close').click(function(event) {
		sidenav.sidenav('close');
	});

	$('.tabs__nav ul').tabs();

	$('.collapsible').collapsible();

	// slider
  $slick_slider = $('.advantages__list');
  settings_slider = {
  	adaptiveHeight: true
    // more settings
  }
  slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 992) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };
});
