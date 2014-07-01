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
- AMD JS Modules
- jQuery
- Normalize
- Modernizr
- JS Hint
- HTML minification
- CSS Compress
- JS Compress
- IMG Compress

## Dependencies

- [NodeJS](http://nodejs.org/)
- [Gulp](http://github.com/gulpjs/gulp)

Make sure do you have NodeJS installed, running `node-v` in your terminal, if you see a higher version than v0.10 you can continue, otherwise install the latest version of [NodeJS](http://nodejs.org/).

Check your Gulp version running `gulp -v` in your terminal, if you see a higher version than 3.8.0, everything is ok. Otherwise run `npm i -g gulp`.

### Installation

Just clone the repo and install the node modules is what you need to use.

```
git clone http://github.com/matheusazzi/front-start.git
cd front-start
npm i
```

## Getting Started

### For development:

`gulp serve` or just `gulp s`

### For build:

`gulp build` or just `gulp b`

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
│   │   ├── styles/   # SCSS files
│   │   ├── vendor/   # Bower packages
│   ├── views/        # Swig templates
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── partials/
│   ├── 404.html
│   ├── favicon.ico
│   ├── humans.txt
│   ├── robots.txt
├── .bowerrc
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .jshintrc
├── .travis.yml
├── bower.json
├── gulpfile.js
├── package.json
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

## License

### The MIT License (MIT)

Copyright © 2014 Matheus Azzi <matheuslazzi@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
