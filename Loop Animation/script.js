function animateStart(){
  startSetTimeoutAnimation();
  startAnimFrameAnimation();
  cssAnimate();
}

function startSetTimeoutAnimation() {
  const refreshRate = 1000 / 60;
  let maxXPosition = 400;
  let rect = document.getElementById('rect0');
  let speedX = 5;
  let positionX = 0;
  let a = 0.2;

  window.setInterval(() => {
    positionX = positionX + speedX;
    //speedX = speedX + a;
    //maxXPosition = maxXPosition - a;
    if (positionX > maxXPosition || positionX < 0) {
      speedX = speedX * (-1);
    }
    rect.style.left = positionX + 'px';
  }, refreshRate);
}

function startAnimFrameAnimation() {
  const refreshRate = 1000 / 60;
  const maxXPosition = 400;
  let rect = document.getElementById('rect1');
  let speedX = 1;
  let positionX = 0;

  function step() {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
      speedX = speedX * (-1);
    }
    rect.style.left = positionX + 'px';
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

function cssAnimate(){
  var elem = document.getElementById('rect2');
  elem.style.animation = "rect2 1.5s ease-in-out infinite alternate";
}