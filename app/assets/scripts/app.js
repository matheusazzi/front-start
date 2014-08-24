var App = (function($) {
  'use strict';

  var appHello = function() {
    console.log('App module');
  };

  var initDispatcher = function() {
    var dispatcher = $('body').data('dispatcher');
    dispatcher = dispatcher.charAt(0).toUpperCase() + dispatcher.slice(1);
    window[dispatcher].init();
  };

  var init = function() {
    appHello();
    initDispatcher();
  };

  return {
    init: init
  };

})(jQuery);

App.init();
