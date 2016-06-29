$('.navbar-panel-button, .darken').click(function() {
	if ($(this).hasClass('open')) {
		$('.navbar-panel-button').removeClass('open');
		$('.navbar-panel').removeClass('open');
		$('.darken').fadeOut(200).removeClass('open');;
	} else {
		$('.navbar-panel-button').addClass('open');
		$('.navbar-panel').addClass('open');
		$('.darken').fadeIn(200).addClass('open');;
	}
});

$('.navbar-panel .dropdown-arrow').click(function() {
	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
		$(this).siblings('.dropdown-content').slideUp();
	} else {
		$(this).addClass('open');
		$(this).siblings('.dropdown-content').slideDown();
	}
});