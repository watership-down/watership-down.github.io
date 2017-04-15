import socialshare from "social-share";

$(function (){
	if ($("body.article").length > 0) {
		const page = {
			pagetitle: document.title,
			articletitle: $("h1")[0].innerText,
			url: $(location).attr('href'),
		};

		console.log(page.articletitle);

		$('article .container').append(
			`
			<div class="share-links" style="left: ${$("article .container").offset().left  - 80}px">
				<p>SHARE</p>

				<a 
					class="share-link"
					href="http://www.facebook.com/sharer.php?t=${ encodeURI(page.pagetitle) }&u=${ encodeURI(page.url) }"
					target="_blank"
				>
					<i class="fa fa-facebook fa-fw" aria-hidden="true"></i>
				</a>
				
				<a 
					class="share-link" 
					href="https://twitter.com/intent/tweet?text=${ encodeURI(page.pagetitle) }&url=${ encodeURI(page.url) }" 
					target="_blank"
				>
					<i class="fa fa-twitter fa-fw" aria-hidden="true"></i>
				</a>

				<a 
					class="share-link" 
					href="mailto:?subject=${ page.articletitle }&amp;body=Take a look at this article:\n${ page.articletitle }\n${ page.url}"
				>
					<i class="fa fa-at fa-fw" aria-hidden="true"></i>
				</a>
			</div>
			`
		);

		$( window ).resize(function() {
			$(".share-links").css("left", $("article .container").offset().left - 80);
		});
	}
});