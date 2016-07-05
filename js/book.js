$(function() {
	setTimeout(function() { 
		$('.reviews').masonry({
			itemSelector: '.review',
		});
	}, 1000);

	// $.getJSON('http://ipinfo.io', function(data){
 //  		console.log(data)
	// });
	var foo = function() {
		var loc = $('.buy select option:selected').val();
		$('.buy span').hide();
		$('.buy span.'+loc).show();
	}

	foo();

	$('.buy select').change(foo);

	// $('.slides').slidesjs({
	// 	width: 
	// })

	$('.slides .info').find('.prev, .next').click(function() {
		$('.slides .info .text, .slides .images img').toggleClass('active');
	});
});

