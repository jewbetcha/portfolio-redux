$( document ).ready(function() {
    var body = $('body');

    var tl = new TimelineLite();
    tl.to(body, 1, {
      opacity: 1,
      y: 50
    }, 0.3);
});
