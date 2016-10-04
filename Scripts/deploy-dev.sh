#!/bin/bash

aws s3 sync \
	--exclude "$(cat .s3ignore)" \
	_site/ \
	s3://codogo-watership-down-site-dev/$BITBUCKET_BRANCH/
