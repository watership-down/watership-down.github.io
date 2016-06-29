$(function() {
	$('.menu-btn, .darken').click(function() {
		if ($(this).hasClass('open')) {
			$('.menu-btn').removeClass('open');
			$('.links').removeClass('open');
			$('.darken').fadeOut(200).removeClass('open');;
		} else {
			$('.menu-btn').addClass('open');
			$('.links').addClass('open');
			$('.darken').fadeIn(200).addClass('open');;
		}
	});
});

console.log('foo');