(function($) {
  $(function() {

    /** sidenav open and close */
    $('.button-collapse').sideNav();
    $(".dropdown-button").dropdown({
      belowOrigin: true,
    });

    /** open all external links in a new tab */
    $('a').filter(function() {
      return this.hostname && this.hostname !== location.hostname;
    }).attr("target","_blank")
    .attr("rel", "noopener"); // https://developers.google.com/web/tools/lighthouse/audits/noopener

    /** make images in posts 'responsive-img' and enable fullscreen */
    $('.kg-card-markdown img').addClass('responsive-img').on('click touchstart', function(event) {
      var elem = event.target;

      // replace pagespeed source with larger one
      var src = $(elem).attr('src');
      var origSrc = src.replace(/[0-9]*xNx/,'').replace(/\.pagespeed.*/,'').replace(/\/x/,'/');
      $(elem).attr('src',origSrc);

      if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
