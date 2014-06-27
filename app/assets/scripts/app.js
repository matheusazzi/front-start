define('app', ['jquery'], function($) {
  'use strict';

  return {
    init: function() {
      this.appHello();
      require([$('body').data('dispatcher')], function(dispatcher) {
        dispatcher.init();
      });
    },

    appHello: function() {
      console.log('App module');
    }
  };

});

require(['app'], function(app) {
  'use strict';
  app.init();
});
