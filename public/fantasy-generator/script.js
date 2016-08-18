(function($) {
  'use strict';
  var poolOne = [

  ];
  var poolTwo = [

  ];
  var poolThree = [

  ];

  function nothing() {
    return 0;
  }
  $(document).ready(function() {
    $('.button').click(function() {

      $('.result').each(function(i) {
        var el = $(this);
        setTimeout(function() {
          el.addClass('fade').text('something');
        }, i * 500);
      });

    });
  });

}(jQuery));
