var $car = document.querySelector('#car');
var turnList = ['turn0', 'turn90', 'turn180', 'turn270'];
var intervalID = null;
var carLocation = {
  x: 0,
  y: 0
};

window.addEventListener('keydown', handleKeyDown);

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
    if (intervalID === null) {
      startMoving();
    } else {
      stopMoving();
    }
  }
}

function moveCar() {
  if ($car.className === 'turn0') {
    $car.style.left = carLocation.x + 'px';
    carLocation.x += 7;
  } else if ($car.className === 'turn90') {
    $car.style.top = carLocation.y + 'px';
    carLocation.y += 7;
  } else if ($car.className === 'turn180') {
    $car.style.left = carLocation.x + 'px';
    carLocation.x -= 7;
  } else if ($car.className === 'turn270') {
    $car.style.top = carLocation.y + 'px';
    carLocation.y -= 7;
  }
}

function startMoving() {
  intervalID = setInterval(moveCar, 16);
}

function stopMoving() {
  clearInterval(intervalID);
  intervalID = null;
}
