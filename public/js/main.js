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

  var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
  var icon = document.querySelector('button'),
	iconSpan = icon.querySelector('span'),
	// mo.js timeline obj
	timeline = new mojs.Timeline(),

	// tweens for the animation:

	// burst animation
	tween1 = new mojs.Burst({
  		parent: icon,
  		duration: 1500,
  		shape : 'circle',
  		fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
  		x: '0%',
  		y: '0%',
  		opacity: 0.6,
  		childOptions: { radius: {20:0} },
  		radius: {10:80},
  		count: 9,
  		isSwirl: true,
  		isRunLess: true,
  		easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
  	}),
  	// ring animation
  	tween2 = new mojs.Transit({
  		parent: icon,
  		duration: 750,
  		type: 'circle',
  		radius: {0: 50},
  		fill: 'transparent',
  		stroke: '#988ADE',
  		strokeWidth: {15:0},
  		opacity: 0.6,
  		x: '0%',
  		y: '0%',
  		isRunLess: true,
  		easing: mojs.easing.bezier(0, 1, 0.5, 1)
  	}),
  	// icon scale animation
  	tween3 = new mojs.Tween({
  		duration : 900,
  		onUpdate: function(progress) {
  			var scaleProgress = scaleCurve(progress);
  			iconSpan.style.WebkitTransform = iconSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
  		}
  	});

  // add tweens to timeline:
  timeline.add(tween1, tween2);

  // when clicking the button start the timeline/animation:
  icon.addEventListener('mouseenter', function() {
  	timeline.start();
  });
  $( document ).ready(function() {
      var body = $('body');

      var tl = new TimelineLite();
      tl.to(body, 0.7, {
        opacity: 1,
        y: 25
      }, 0.2);


  });
})();
