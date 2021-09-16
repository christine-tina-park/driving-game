var $car = document.querySelector('#car');
var turnList = ['turn0', 'turn90', 'turn180', 'turn270'];
var intervalID;
var carLocation = {
  x: 0,
  y: 0
};

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

function doTurn(turnName) {
  for (var i = 0; i < turnList.length; i++) {
    if (turnList[i] === turnName) {
      $car.className = turnList[i];
    }
  }
}

function handleKeyDown(event) {
  if (event.key === 'ArrowRight') {
    doTurn('turn0');
  } else if (event.key === 'ArrowDown') {
    doTurn('turn90');
  } else if (event.key === 'ArrowLeft') {
    doTurn('turn180');
  } else if (event.key === 'ArrowUp') {
    doTurn('turn270');
  } else if (event.code === 'Space') {
    startMoving();
  }
}

function handleKeyUp(event) {
  if (event.code === 'Space') {
    stopMoving();
  }
}

function moveCar() {
  var styleText = 'top: ' + carLocation.y + 'px; left: ' + carLocation.x + 'px';
  $car.setAttribute('style', styleText);
  carLocation.x += 7;
}

function startMoving() {
  intervalID = setInterval(moveCar, 16);
}

function stopMoving() {
  clearInterval(intervalID);
}
