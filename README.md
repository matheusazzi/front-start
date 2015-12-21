Front Start
================

This is my front start for projects.

## Features

- HTML5 Boilerplate
- Swig Template Engine, for smart views
- NPM as a package manager
- Sass (with libsass for higher performance)
- ES6/JSX Ready and ESLint
- Test Suite with Karma, Mocha, Expect and Sinon
- Autoprefixer
- Browser Sync (live browser reloading and cross-device synchronization)
- jQuery and Normalize as default
- [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/) to provide some mixins and a Grid System
- HTML minification
- Assets are concatenated and compressed (JS, CSS and images)

## Dependencies

- [NodeJS](http://nodejs.org/)
- [Gulp](http://github.com/gulpjs/gulp)

Make sure do you have NodeJS installed, running `node-v` in your terminal, if you see a higher version than v5.0.0 you can continue, otherwise install the latest version of [NodeJS](http://nodejs.org/).

Check your Gulp version running `gulp -v` in your terminal, if you see a higher version than 3.9.0, everything is ok. Otherwise run `npm i -g gulp`.

### Installation

Just clone the repo and install the node modules is what you need to use.

```
git clone http://github.com/matheusazzi/front-start.git
cd front-start && npm install
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
│   │   ├── scripts/  # ES6 JS files
│   │   │   ├── components/
│   │   │   ├── modules/
│   │   ├── styles/   # SCSS files
│   │   │   ├── components/
│   │   │   ├── helpers/
│   │   │   ├── widgets/
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
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .npmrc
├── .travis.yml
├── gulpfile.babel.js
├── karma.conf.js
├── package.json
├── README.md
├── webpack.config.js
```

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Opera
- IE9+

## License

### The MIT License (MIT)

Copyright © 2015 Matheus Azzi <matheuslazzi@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
