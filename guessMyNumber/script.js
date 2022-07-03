'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input').value);
  // when there's no input
  if (!guess) {
    displayMessage('No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    document.querySelector('body').style.background = '#3BAD2C';

    document.querySelector('.number').style.width = '11rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.background = '#403040';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.input').value = '';
  document.querySelector('.number').style.width = '8rem';
});
