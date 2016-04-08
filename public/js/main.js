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

  var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');


  function animationOne() {
    var icon = document.querySelector('.one');
  	//iconSpan = icon.querySelector('span'),
  	// mo.js timeline obj
  	var timeline = new mojs.Timeline(),

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
  }
  $( document ).ready(function() {
      var body = $('body');

      var tl = new TimelineLite();
      tl.to(body, 0.7, {
        opacity: 1,
        y: 25
      }, 0.2);
  });
})();
