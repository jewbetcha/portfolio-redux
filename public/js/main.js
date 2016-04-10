(function() {
  'use strict';

  // Selecting the container element
  var el = document.querySelector('.my-text');

  // All the possible options (these are the default values)
  // Remember that every option (except individualDelays) can be defined as single value or array
  var options = {
      size: 65,
      weight: 7,
      rounded: true,
      color: '#483D3F',
      duration: 1.2,
      delay: [0.7,0.4,0.5,0.45,0.15,0.35,0.3,0.2,0.1,0.3,0.3,0.1,0.2,0.54],
      fade: 0.2,
      easing: d3_ease.easeCubicInOut.ease,   // Easing function
      individualDelays: true,
  };

  // Initializing the text
  var myText = new Letters(el, options);
  myText.show();

  $( document ).ready(function() {
      var body = $('body');

      var tl = new TimelineLite();
      tl.to(body, 0.7, {
        opacity: 1,
        y: 25
      }, 0.2);

      $('.icobutton').hover(function() {
        $(this).addClass('icobutton--hover');
        var self = $(this);
        setTimeout(function () {
            self.removeClass('icobutton--hover');
        }, 2000);
      });
  });
})();
