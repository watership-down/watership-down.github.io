#!/bin/bash

aws s3 sync \
	--exclude "$(cat .s3ignore)" \
	--delete \
	_site/ \
	s3://codogo-watership-down-site-prod/

aws configure set preview.cloudfront true

aws cloudfront create-invalidation \
	--distribution-id ENY36WYXVXRL4 \
	--paths "/*"
