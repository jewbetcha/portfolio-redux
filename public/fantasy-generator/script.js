(function($) {
  'use strict';

  $(document).ready(function() {
    var item;
    function getRandom(arr) {
      item = arr[Math.floor(Math.random()*arr.length)];
      return item;
    }

    var res = $('.result');
    $('.button').click(function() {
      res.text('');

      res.each(function(i) {
        var el = $(this);
        setTimeout(function() {
          el.addClass('fade').text(getRandom(data[i]));
        }, i * 500);
      });

      res.removeClass('fade');
    });
  });

}(jQuery));
