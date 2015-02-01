define('dispatcher', ['jquery'],
  function($) {
    'use strict';

    var components = $('[data-component]'),
      modules = $('body').data('modules').split();

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
