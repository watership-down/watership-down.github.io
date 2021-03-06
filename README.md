# Watership Down

Watership Down Enterprises Marketing Website

<https://watership-down.com/>

## Watership Down

A phenomenal worldwide bestseller for over forty years, Richard Adams’ spellbinding classic [Watership Down](https://watership-down.com/book/watership-down/) is one of the best-loved novels of all time.

Set in the beautiful English countryside of the Berkshire Downs, a once idyllic rural landscape, this stirring tale of adventure, courage, and survival follows a band of very special rabbits fleeing the destruction of their home by a developer. Led by a stout-hearted pair of brothers, they leave the safety of Sandleford Warren in search of a safe haven and a mysterious promised land, skirting danger at every turn.

## Richard Adams

Richard George Adams (9th May, 1920 – 24th December, 2016) was an English novelist best known as the author of Watership Down.

He originally began telling the story of Watership Down to his two daughters, and they insisted he publish it as a book. When Watership Down was finally published, it sold over a million copies in record time in both the United Kingdom and the United States. Watership Down has become a modern classic and won both the Carnegie Medal and the Guardian Children's Fiction Prize in 1972.

Others of his books include Shardik, Maia, Tales from Watership Down, The Girl in a Swing and The Plague Dogs, the last two of which, together with Watership Down, have been filmed. His goal was always to tell a good story, ideally one so good you can't put it down!

Richard Adams lived in Hampshire, England. He has written about his childhood and youth, including the time he served in the army in World War II, in 'The Day Gone By'.

## Running the site

### Dependencies

#### Ruby

We need rube v 2.7. 3 crashes

1. `brew install ruby@2.7` (if you haven't installed homebrew: https://brew.sh/)
2. `echo 'PATH="/usr/local/opt/ruby@2.7/bin:$PATH"`
3. `echo 'export GEM_HOME="$HOME/.gem"' >> ~/.zshrc`
4. Quit and restart terminal
5. Check your version `ruby -v`

#### Jekyll

1. `gem install bundler jekyll`

#### Gems

1. `cd this/repo/path`
2. `bundle install`

### Scripts
- `npm run build` builds the website statically
- `npm run serve` serve the site - `http://127.0.0.1:4000/`
- `npm run watch` serve but it rebuilds the website whenever you make changes

## Contributing

### Deployments

The site is deployed with github pages. All commits are automatically deployed.

PRs are validated with Circle CI, so open PRs, don't just merge into master!

### Content

Creating a new blog:
- Add a blog post -> `./_posts`. Use the existing posts as examples.
- Add image assets -> `./assets/img/posts`. Make sure to _minify_ them before committing, this repo doesn't use Git LFS.
- 
