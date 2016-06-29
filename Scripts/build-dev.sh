#!/bin/bash

echo "baseurl: \"/${BITBUCKET_BRANCH}\""  >> _config.branch.yml
echo "branch build"
jekyll build --drafts --config _config.yml,_config.branch.yml 
