$(function() {
	window.sass = {};
	$(".js-sass-vars").children()
		.each(function() {
			window.sass[$(this).attr("class")] = parseInt($(this).css("content").replace(/["(px)]/g,""));
		});
});
