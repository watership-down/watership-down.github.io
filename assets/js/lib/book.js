import jQueryBridget from "jquery-bridget";
import Masonry from 'masonry-layout';

$(function() {
	if ($("body.book").length > 0) {
		// Masonry
		jQueryBridget( 'masonry', Masonry, $ );

		setTimeout(function() { 
			$('.reviews').masonry({
				itemSelector: '.review',
			});
		}, 1000);

		// Book interactions
		var toggleBuy = function() {
			var loc = $('.buy select option:selected').val();
			$('.buy span').hide();
			$('.buy span.'+loc).show();
		}

		toggleBuy();

		$('.buy select').change(toggleBuy);

		$('.slides .info').find('.prev, .next').click(function() {
			$('.slides .info .text, .slides .img img').toggleClass('active');
		});
	}
});

