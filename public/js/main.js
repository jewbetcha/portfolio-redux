(function() {
  'use strict';

  // Selecting the container element
  var el = document.querySelector('.my-text');

  // All the possible options (these are the default values)
  // Remember that every option (except individualDelays) can be defined as single value or array
  var options = {
      size: 55,         // Font size, defined by the height of the letters (pixels)
      weight: 7,         // Font weight (pixels)
      rounded: true,    // Rounded letter endings
      color: '#483D3F',  // Font color
      duration: 1,       // Duration of the animation of each letter (seconds)
      delay: [0.1,0.4,0.2,0.45,0.15,0.35,0.1,0.2,0.1,0.3,0.3,0.1,0.2,0.14],  // Delay animation among letters (seconds)
      fade: 0.2,         // Fade effect duration (seconds)
      easing: d3_ease.easeCubicInOut.ease,   // Easing function
      individualDelays: true,               // If false (default), every letter delay increase gradually, showing letters from left to right always. If you want to show letters in a disorderly way, set it to true, and define different delays for the desired letters.
  };

  // Initializing the text (Letters parameters: container-element, options)
  var myText = new Letters(el, options);
  myText.show();

  $( document ).ready(function() {
      var body = $('body');

      var tl = new TimelineLite();
      tl.to(body, 0.7, {
        opacity: 1,
        y: 25
      }, 0.2);
  });
})();
