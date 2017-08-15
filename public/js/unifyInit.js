$(document).on('ready', function () {
  // initialization of carousel
  $.HSCore.components.HSCarousel.init('.js-carousel');

  // initialization of tabs
  $.HSCore.components.HSTabs.init('[role="tablist"]');

  // initialization of counters
  var counters = $.HSCore.components.HSCounter.init('[class*="js-counter"]');

  // initialization of popups with media
  $.HSCore.components.HSPopup.init('.js-fancybox-media', {
    helpers: {
      media: {},
      overlay: {
        css: {
          'background': 'rgba(255, 255, 255, .8)'
        }
      }
    }
  });

  // initialization of go to
  $.HSCore.components.HSGoTo.init('.js-go-to');
});

$(window).on('load', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#js-header'));
  $.HSCore.helpers.HSHamburgers.init('.hamburger');

  // initialization of HSMegaMenu component
  $('.js-mega-menu').HSMegaMenu({
    event: 'hover',
    pageContainer: $('.container'),
    breakpoint: 991
  });
});

$(window).on('resize', function () {
  setTimeout(function () {
    $.HSCore.components.HSTabs.init('[role="tablist"]');
  }, 200);
});
