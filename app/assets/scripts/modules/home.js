define('home', ['jquery'],
  function($) {
    'use strict';

    function Home() {
      this.message = 'Hello from Home Module';
    }

    Home.prototype.initialize = function() {
      this.sayHello();
    };

    Home.prototype.sayHello = function() {
      console.log(this.message);
    };

    return Home;
  }
);
