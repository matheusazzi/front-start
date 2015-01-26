define('home', ['jquery'],
  function($) {
    'use strict';

    function Home() {
      this.sayHello();
    }

    Home.prototype.sayHello = function() {
      console.log('Hello from Home Module');
    };

    return Home;
  }
);
