define('home', ['jquery', 'app'], function($, app) {
  'use strict';

  return {
    init: function() {
      this.homeHello();
    },

    homeHello: function() {
      console.log('Home module');
    }
  };

});
