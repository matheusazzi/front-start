import $ from 'vendor/jquery/dist/jquery';

const defaults = {
  scrollSpeed: 400,
  scrollToPosition: 0,
  elem: $('html, body')
};

class BackToTop {
  constructor(element, options) {
    this.element = $(element);
    this.settings = $.extend({}, defaults, options);
    this.addListener();
  }

  addListener() {
    this.element.on('click', (e) => {
      e.preventDefault();

      this.settings.elem.animate({
        scrollTop: this.settings.scrollToPosition
      }, this.settings.scrollSpeed);
    });
  }
}

$.fn.backToTop = function backToTop(options) {
  return this.each(() => {
    if (!$.data(this, 'backToTop')) {
      $.data(this, 'backToTop', new BackToTop(this, options));
    }
  });
};

export default $.fn.backToTop;
