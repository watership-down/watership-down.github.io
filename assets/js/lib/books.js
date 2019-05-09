import jQueryBridget from "jquery-bridget";
import Masonry from 'masonry-layout';

$(function() {
	if ($("body.books").length > 0) {
		setTimeout(function() {
			jQueryBridget( 'masonry', Masonry, $ );
			
			$('.book-list').masonry({
				itemSelector: '.book-item',
			});
		}, 1000);
	}
});