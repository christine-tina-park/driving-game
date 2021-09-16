var $car = document.querySelector('#car');
var turnList = [
  {
    name: 'turn0',
    i: 0
  },
  {
    name: 'turn90',
    i: 1
  },
  {
    name: 'turn180',
    i: 2
  },
  {
    name: 'turn270',
    i: 3
  }
];

window.addEventListener('keydown', handleKeyDown);

function doTurn(iNumber) {
  for (var i = 0; i < turnList.length; i++) {
    if (turnList[i].i === iNumber) {
      $car.className = turnList[i].name;
    }
  }
}

function handleKeyDown(event) {
  if (event.key === 'ArrowRight') {
    doTurn(0);
  } else if (event.key === 'ArrowDown') {
    doTurn(1);
  } else if (event.key === 'ArrowLeft') {
    doTurn(2);
  } else if (event.key === 'ArrowUp') {
    doTurn(3);
  }
}
