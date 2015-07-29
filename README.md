Front Start
================

This is my front start for projects.

## Features

- HTML5 Boilerplate
- Swig Template Engine, for smart views
- Bower, as a package manager
- Sass (with libsass for higher performance)
- Auto Prefixer
- Browser Sync
- AMD JS Modules (files are dynamically executed by a [Dispatcher](#how-dispatcher-works))
- jQuery, Normalize and Modernizr
- [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/) to provide some mixins and a Grid System
- JS Hint and JSCS
- HTML minification
- Assets are concatenated and compressed (JS, CSS and images)

## Dependencies

- [NodeJS](http://nodejs.org/)
- [Gulp](http://github.com/gulpjs/gulp)
- [Bower](http://bower.io/)

Make sure do you have NodeJS installed, running `node-v` in your terminal, if you see a higher version than v0.10 you can continue, otherwise install the latest version of [NodeJS](http://nodejs.org/).

Check your Gulp version running `gulp -v` in your terminal, if you see a higher version than 3.8.0, everything is ok. Otherwise run `npm i -g gulp`.

### Installation

Just clone the repo and install the node modules is what you need to use.

```
git clone http://github.com/matheusazzi/front-start.git
cd front-start
npm i && bower install
```

## Workflow

### For development:

`npm start`

### For tests:

`npm test`

### For build:

`npm build`

This command will generate a `/dist` folder, with all files concatenated and compressed.

Ready for deploy.

### Serve dist:

If you want to serve your builded directory (/dist) for test something.

`gulp serve:dist` or just `gulp s:dist`

## Structure:

```
front-start/
├── app/
│   ├── assets/
│   │   ├── images/
│   │   ├── scripts/  # AMD JS files
│   │   │   ├── components/
│   │   │   ├── modules/
│   │   ├── styles/   # SCSS files
│   │   │   ├── components/
│   │   │   ├── helpers/
│   │   │   ├── widgets/
│   │   ├── vendor/   # Bower packages
│   ├── views/        # Swig templates
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── partials/
├── tasks/
├── specs/
│   ├── 404.html
│   ├── favicon.ico
│   ├── humans.txt
│   ├── robots.txt
├── .bowerrc
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .jscsrc
├── .jshintrc
├── .travis.yml
├── bower.json
├── gulpfile.js
├── package.json
├── README.md
```

## Browser Support

- IE8+
- Firefox
- Chrome
- Safari 7+
- Opera 24+
- iOS Safari 7+
- Android / Chrome 4.4+
- BlackBerry 10

## How Dispatcher Works

We use AMD to organize our code, so we use [Almond](http://github.com/jrburke/almond) for this.

This is the dispatcher code:

```javascript
define('dispatcher', ['jquery'],
  function($) {
    'use strict';

    var components = $('[data-component]'),
      modules = $('[data-modules]');

    $.each(components, function(__index, component) {
      var currentComponent = $(component),
        options = currentComponent.data();

      require(options.component);
      currentComponent[options.component](options);
    });

    $.each(modules, function(index) {
      var Module = require(modules[index]);
      Module = new Module();
      Module.initialize();
    });
  }
);

require('dispatcher');
```

The dispatcher will instantiate modules and execute components like a jQuery plugin, then you need to code them that way.

If you have a code like this:

```html
<body data-modules="foo bar baz">

  <button data-component="backToTop" data-speed="600">Back to top</button>

  <div
    data-component="carousel"
    data-pagination="true"
    data-slides-to-show="3"
    data-circular="true"></div>

</body>
```

The dispatcher will automatically require the modules `foo`, `bar` and `baz` present in `data-modules` on `body` tag. And will execute the components based on the attribute `data-component`, passing other attributes as options, after require the files, this example will execute:

```javascript
var Module;

Module = new Foo(); Module.initialize();
Module = new Bar(); Module.initialize();
Module = new Baz(); Module.initialize();

$('data-component="backToTop"').backToTop({
  speed: 600
});

$('[data-component="carousel"]').carousel({
  pagination: true,
  slidesToShow: 3,
  circular: true
});
```

### Coding modules

Code modules like a javascript class, using a method called `initialize` to start they behavior, so it will be instantiate when needed.

> Why have an initialize method?

- Because constructors should not cause [side effects](http://blog.millermedeiros.com/constructors-should-not-cause-side-effects/).

```javascript
define('someService', ['jquery'],
  function($) {
    'use strict';

    function SomeService() {
      this.message = 'Hello from SomeService Module';
    }

    SomeService.prototype.initialize = function() {
      this.sayHello();
    };

    SomeService.prototype.sayHello = function() {
      console.log(this.message);
    };

    return SomeService;
  }
);
```

### Coding components

Code every component like a jQuery plugin, it will be dynamically executed passing the options to the plugin.

A component should always return `this`.

```javascript
define('backToTop', ['jquery'],
  function($) {
    'use strict';

    var defaults = {
      scrollSpeed: 400,
      scrollToPosition: 0
    };

    function BackToTop(element, options) {
      this.element = $(element);
      this.settings = $.extend({}, defaults, options);
      this.addListener();
    }

    BackToTop.prototype.addListener = function() {
      var self = this;

      this.element.on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: self.settings.scrollToPosition
        }, self.settings.scrollSpeed);
      });
    };

    $.fn.backToTop = function(options) {
      return this.each(function() {
        if (!$.data(this, 'backToTop')) {
          $.data(this, 'backToTop', new BackToTop(this, options));
        }
      });
    };
  }
);
```

## License

### The MIT License (MIT)

Copyright © 2015 Matheus Azzi <matheuslazzi@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
