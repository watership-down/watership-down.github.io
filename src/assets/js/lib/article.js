$(function() {
	if ($("article").length > 0) {
		$('article p:has(img)').css('text-align', 'center');
	}
});