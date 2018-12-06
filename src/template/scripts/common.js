$(document).ready(function($) {

	$('.dropdown-trigger').dropdown();

	var sidenav = $('.sidenav');
	sidenav.sidenav();

	$('.sidenav__close').click(function(event) {
		sidenav.sidenav('close');
	});

	$('.tabs__nav ul').tabs();

	$('.collapsible').collapsible();

  $('.advantages__list').slick({
    slidesToShow: 3,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        adaptiveHeight: true
      }
    }]
  })
});
