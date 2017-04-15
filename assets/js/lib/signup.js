$(function() {
	$('.signup .input.submit').click(function() {
		var email = $('.signup .input.email').text();
		var $message = $('.signup .message');
		$.ajax({
			type: 'GET',
			url: '//codogo.us13.list-manage.com/subscribe/post-json?u=5081c2ff841600cd87a25a458&amp;id=0fd016514a&c=?',
			data: 'EMAIL='+email,
	        dataType    : 'jsonp',
	        error       : function(err) {
	        	// console.log('ERROR');
	        	// console.log(err);
	        	$message.addClass('error').text('Something went wrong. Please try again later.');
	        },
	        success     : function(data) {
	        	// console.log('SUCCESS');
	        	// console.log(data);
	        	data.result === 'success' ? $message.addClass('success').text('Awesome. Please check your inbox to verify your email.') : $message.addClass('error').text('Please enter a valid email address.');
	        }
		})
	});
});