define('backToTop', ['jquery'],
  function($) {
    'use strict';

    var defaults = {
      scrollSpeed: 400,
      scrollToPosition: 0
    };

    function BackToTop(element, options) {
      this.element = $(element);
      this.settings = $.extend({}, defaults, options);
      this.addListener();
    }

    BackToTop.prototype.addListener = function() {
      var self = this;

      this.element.on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: self.settings.scrollToPosition
        }, self.settings.scrollSpeed);
      });
    };

    $.fn.backToTop = function(options) {
      return this.each(function() {
        if (!$.data(this, 'backToTop')) {
          $.data(this, 'backToTop', new BackToTop(this, options));
        }
      });
    };
  }
);
