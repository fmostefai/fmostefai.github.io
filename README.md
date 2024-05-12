# fmostefai.com

This Github Pages site is statically generated using [Hugo](https://gohugo.io/).


### Working locally

Install Hugo:

```
brew install hugo
```


Start the local dev server. This server will build the website and serve it on a local port, and it will re-build and hot-reload whenever you update and save a file. 

```
hugo server
```

Navigate to http://localhost:1313/ and monitor while you work.


### Updating the site

To update the site header and footer, edit the `params` in `hugo.yml`.

To update the copy on the homepage, edit `content/_index.md`. See [how Hugo renders Markdown](https://gohugo.io/content-management/formats/#markdown), as well as the [configuration](https://gohugo.io/getting-started/configuration-markup/#goldmark) and [extensions](https://gohugo.io/getting-started/configuration-markup/#goldmark-extensions) that Hugo uses by default.

To update the images, replace:
- `static/images/avatar.jpg` to change the headshot
- `static/images/bg.jpg` to change the background. Consider using unsplash.com for free images. Remember to test the site in multiple different screen sizes when you change this image. 
