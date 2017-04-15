$(function() {
	window.bp = {};
	var $window = $(window);
	var $xs = $(".is-xs");
	var $sm = $(".is-sm");
	var $md = $(".is-md");
	var $lg = $(".is-lg");
	$window.on("resize", function() {
		window.bp.xs = !!$xs.css("content");
		window.bp.sm = !!$sm.css("content");
		window.bp.md = !!$md.css("content");
		window.bp.lg = !!$lg.css("content");
	});
	$window.trigger("resize");
});
