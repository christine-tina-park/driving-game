var $car = document.querySelector('#car');
var turnList = ['turn0', 'turn90', 'turn180', 'turn270'
];

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
  }
}
