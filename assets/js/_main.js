/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
   // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 925 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // Animated starfield background
  (function initStarfield(){
    var canvas = document.createElement('canvas');
    canvas.id = 'starfield-bg';
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = -1;
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var stars = [];
    var numStars = 160;
    var deviceRatio = window.devicePixelRatio || 1;

    function resize(){
      var w = window.innerWidth;
      var h = window.innerHeight;
      canvas.width = Math.floor(w * deviceRatio);
      canvas.height = Math.floor(h * deviceRatio);
      ctx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
    }
    resize();
    $(window).on('resize', resize);

    function createStars(){
      stars = [];
      for (var i = 0; i < numStars; i++){
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 0.7 + 0.3,
          s: Math.random() * 1.2 + 0.2,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2
        });
      }
    }
    createStars();

    function step(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for (var i = 0; i < stars.length; i++){
        var star = stars[i];
        star.x += star.vx * star.z * 2;
        star.y += star.vy * star.z * 2;
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
        var glow = 0.6 + 0.4 * Math.sin((Date.now()/300) + i);
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 229, 255,'+ (0.3 + 0.5 * star.z) +')';
        ctx.shadowColor = 'rgba(0, 229, 255,'+ (0.5 * glow) +')';
        ctx.shadowBlur = 6 * star.z;
        ctx.arc(star.x, star.y, star.s * (0.8 + 0.6 * glow), 0, Math.PI*2);
        ctx.fill();
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  })();

});
