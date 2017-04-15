$(function() {
	var divs = $('div', '.carousel');

	function fade() {
		var current = $('.current');
		var currentIndex = divs.index(current),
			nextIndex = currentIndex + 1;

		if (nextIndex >= divs.length) {
			nextIndex = 0;
		}

		var next = divs.eq(nextIndex);

		next.stop().fadeIn(2000, function() {
			$(this).addClass('current');
		});

		current.stop().fadeOut(2000, function() {
			$(this).removeClass('current');
			setTimeout(fade, 4000);
		});
	}

	fade();
});