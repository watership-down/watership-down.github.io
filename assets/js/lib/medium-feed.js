import React from "react";
import codogoFetch from "../network/codogo-fetch";

$(function (){
	if ($("body.blog").length > 0) {
		const postLimit = 6;
		const username = "@oritgal";

		codogoFetch({
			url: "https://medium.com/feed/" + username,
			fetchParams: {
				method: "GET",
				headers: {
					'Content-Type': 'application/rss+xml'
				},
			},
		})
		.then( (x) => (x.json()) )
		.then(
			(x) => {
				const feed = $($.parseXML(x.body))
				.find("item")
				.each(function(i) {
					if( i >= postLimit ) { return false }

					const $this = $(this);
					
					function findDesc(tag) { return ( $(tag).is("h4") || $(tag).is("p") ); }

					function findImg(tag) { return ( tag.src !== undefined || $(tag).find("img").attr("src")); }

					const item = {
						title: $this.find("title").text(),
						link: $this.find("link").text(),
						description: $.parseHTML($this.find("encoded").html()).find(findDesc).innerHTML.replace(/(<([^>]+)>)/ig,""),
						content: $this.find("encoded").text(),
						pubDate: $this.find("pubDate").text(),
						author: $this.find("creator").text(),
						img: (() => {
							x = $.parseHTML($this.find("encoded").html()).find(findImg);
							return (x.src || $(x).find("img").attr("src"));
						})(),
					}

					if(i < 1) {
						$("body.blog .blog-banner").append(
							`
							<a href="${item.link}" target="_blank">
								<div class="post-banner" style="background-image:url('${item.img}')" alt="${item.title} Post Image">
									<div class="darken"></div>
									
									<div class="container">
										<div class="row">
											<div class="col-xs-12 col-md-8 col-md-offset-2">
												<div class="text">
													<div class="title">
														<div class="recent">Recent:</div>

														<h1>${item.title}</h1>

														<div class="meta">
															<p class="excerpt">${item.description}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							`
						)
					}
					else {
						$("body.blog .blog-grid .row.blog").append(
							`
							<div class="col-xs-12 col-sm-6 col-md-4">
								<div style="background-image:url('${item.img}'); background-size: cover;" alt="${item.title} Post Image">
									<a href="${item.link}" class="blog-post" target="_blank">
										<div class="darken"></div>

										<div class="text">
											<h1>${item.title}</h1>
											<p>${item.description}</p>
										</div>
									</a>
								</div>
							</div>
							`
						)
					}
				});
			}
		)
		.then(
			() => {
				$("body.blog .blog-grid .row.blog").append(
					`<div class="col-xs-12 col-sm-6 col-md-4">
						<div>
							<a class="blog-post view-all" href="https://medium.com/@oritgal" target="_blank">
								<div class="text">
									<h2>View all posts</h2>

									<p>Read more from Social Acupuncture on Medium.</p>
								</div>
							</a>
						</div>
					</div>
					`
				)
			}
		);
	}
});