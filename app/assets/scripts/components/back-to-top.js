define('backToTop', ['jquery'],
  function($) {
    'use strict';

    $.fn.backToTop = function(options) {
      var defaults = {
        scrollSpeed: 400,
        scrollToPosition: 0
      };

      var settings = $.extend({}, defaults, options);

      this.on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: settings.scrollToPosition
        }, settings.scrollSpeed);

        return false;
      });

      return this;
    };
  }
);
