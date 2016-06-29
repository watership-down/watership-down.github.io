#!/bin/bash

shopt -s globstar

s3cmd \
	sync \
	--access_key=$AWS_ACCESS_KEY_ID \
	--secret_key=$AWS_SECRET_ACCESS_KEY \
	--exclude-from .s3ignore \
	_site/ \
	s3://codogo-watership-down-site-dev/$BITBUCKET_BRANCH/


for CSS in _site/**/*.css
do
	s3cmd \
		sync \
		--access_key=$AWS_ACCESS_KEY_ID \
		--secret_key=$AWS_SECRET_ACCESS_KEY \
		--exclude-from .s3ignore \
		-m text/css \
		$CSS \
		s3://codogo-watership-down-site-dev/$BITBUCKET_BRANCH/$(echo $CSS | sed -e "s/_site\///") 
done
