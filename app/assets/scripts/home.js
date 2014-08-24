var Home = (function($) {
  'use strict';

  var homeHello = function() {
    console.log('Home module');
  };

  var init = function() {
    homeHello();
  };

  return {
    init: init
  };

})(jQuery);
