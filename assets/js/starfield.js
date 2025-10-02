(function(){
  function initStarfield(){
    try{
      var existing = document.getElementById('starfield-bg');
      if(existing) return;
      var canvas = document.createElement('canvas');
      canvas.id = 'starfield-bg';
      document.body.appendChild(canvas);
      var ctx = canvas.getContext('2d');
      var stars = [];
      var numStars = 160;
      var dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

      function resize(){
        var w = window.innerWidth;
        var h = window.innerHeight;
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      function createStars(){
        stars.length = 0;
        for(var i=0;i<numStars;i++){
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
      function step(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(var i=0;i<stars.length;i++){
          var star = stars[i];
          star.x += star.vx * star.z * 2;
          star.y += star.vy * star.z * 2;
          if(star.x < 0) star.x = canvas.width;
          if(star.x > canvas.width) star.x = 0;
          if(star.y < 0) star.y = canvas.height;
          if(star.y > canvas.height) star.y = 0;
          var glow = 0.6 + 0.4 * Math.sin((Date.now()/300) + i);
          ctx.beginPath();
          ctx.fillStyle = 'rgba(0,229,255,'+(0.3 + 0.5*star.z)+')';
          ctx.shadowColor = 'rgba(0,229,255,'+(0.5*glow)+')';
          ctx.shadowBlur = 6 * star.z;
          ctx.arc(star.x, star.y, star.s * (0.8 + 0.6 * glow), 0, Math.PI*2);
          ctx.fill();
        }
        requestAnimationFrame(step);
      }
      resize();
      createStars();
      window.addEventListener('resize', resize);
      requestAnimationFrame(step);
    }catch(e){/* no-op */}
  }
  if(document.readyState === 'loading'){
    window.addEventListener('DOMContentLoaded', initStarfield);
  } else {
    initStarfield();
  }
})();


