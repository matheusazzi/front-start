import $ from 'vendor/jquery/dist/jquery';
import BackToTop from 'scripts/components/back-to-top';

describe('BackToTop', () => {
  let button = $('<button />'),
    body = $('body'),
    elem;

  beforeEach(() => {
    body.append(
      `<div class="container" style="height:100px;overflow:auto;">
        <div style="height:1000px;" />
      </div>`
    );

    elem = $('.container');
    button.backToTop({ elem: elem, scrollSpeed: 50 });
  });

  describe('When click', () => {
    it('scrolls to top of the window', (done) => {
      elem.scrollTop(500);
      button.trigger('click');

      setTimeout(function() {
        expect(elem.scrollTop()).toEqual(0);
        done();
      }, 100);
    });
  });
});
