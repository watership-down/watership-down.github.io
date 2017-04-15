$(function() {
	if ($("body.article").length > 0) {
		$('body.article p:has(img)').css('text-align', 'center');
	}
});