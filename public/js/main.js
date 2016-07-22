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
      duration: 1.0,
      delay: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4],
      fade: 0.8,
      easing: d3_ease.easeCubicInOut.ease,   // Easing function
      individualDelays: true,
  };

  // Initializing the text
  var myText = new Letters(el, options);
  myText.show();

  $(document).ready(function() {
      var body = $('body');

      var tl = new TimelineLite();
      tl.to(body, 0.7, {
        opacity: 1,
        y: 25
      }, 0.2);
      TweenMax.staggerTo('.fact', 0.8, {opacity: 1}, 0.4);

      var opts = {
        containerId: "sub",
        namespace: "sub",
        interval: 3500,
        speed: 200,
        mobileWidth: 475,
        verbose: false,
        random: false,
        best: true,
        clearOriginalContent: false
      };
      var sub = new Sub([
        "a big fan of eating",
        "a JavaScript enthusiast",
        "a lover of all things internet",
        "an occasional writer",
        "a tech agnostic"
      ], opts).run();
  });
})();
