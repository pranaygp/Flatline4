# Flatline 4
[![Travis CI](https://img.shields.io/travis/Flatline4/Flatline4.svg?style=flat-square)](https://travis-ci.org/Flatline4/Flatline4)
[![Gitter](https://img.shields.io/badge/chat-Gitter-ff69b4.svg?style=flat-square)](https://gitter.im/Flatline4/Lobby)

## What is Flatline4?
Flatline4: the definitive web development experience. Flatline4 is a new front-end framework that's here to stay. Written purely in TypeScript, Flatline provides
a rich suite of features to web developers developing SPAs including HTML generation, routing, and AJAX requests (that's asynchronous javascript and xml request, not the dish soap).
Flatline4 allows developers to create their website's using entirely JavaScript or TypeScript and eliminates the pain of writing HTML and CSS. Sound intersting? Read on to learn more.

## Sounds awesome! But how can I use it?
Becuase Flatline compiles to pure JavaScript, using it is as simple as adding a script tag to your page. See the example below. In addition, a demo website is included in the demo folder.
```html
<!DOCTYPE html>
<html>
  <body>
    <script src="flatline-browser.min.js"></script>
    <script>
      Flatline.Route('home', function(body) {
        body
          .h1(function(parent, style, children) {
            children
              .text('Hello World!');
          });
      });
    </script>
  </body>
</html>
```
  
## So how do I build it?
Becuase Flatline4 using npm as its package manager and task runner, installing and building the project is a breeze. Simply clone the repository, navigate to the root directory,
and run `npm install` to install the project dependencies and `npm run build` to build the project. The build outputs 4 bundles:
* flatline-browser.js
* flatline-browser.min.js
* flatline-common.js
* flatline-common.min.js
The browser bundles are for use in the browser, and the common bundles are for use in NodeJS.

> During development, use `npm run dev` instead to only build unminified files and watch for changes

## Contributor Guide
TODO: Write a contributor guide

## License
MIT