$(function() {
  //stripes disappear after scrolling down a little
  $(window).scroll(function() {
      if ($(this).scrollTop() === 0) { // this refers to window
          document.getElementById("nav").style.backgroundImage = "url('Assets/white_stripes.png')";
      }
      if ($(this).scrollTop() > 0) { // this refers to window
          console.log("You've scrolled 100 pixels.");
          document.getElementById("nav").style.backgroundImage = "none";
      }
  });

  // Animate Scrolling
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 70 //offset of 70 because of fixed navbar top
          }, 300, function() {
          });
        }
      }
    });

    $('.carousel').carousel({
      interval: 800 * 10
    });
});
