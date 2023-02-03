'use strict';

const Btn1 = document.querySelector('.card-1');
const Btn2 = document.querySelector('.card-2');
const Btn3 = document.querySelector('.card-3');
const Btn4 = document.querySelector('.card-4');
const Btn5 = document.querySelector('.card-5');
const Btn6 = document.querySelector('.card-6');
const Btn7 = document.querySelector('.card-7');

let randomNumber;

function show1() {
  randomNumber = Math.floor(Math.random() * 8) - 4;
  Btn1.classList.remove('backside');
  Btn1.classList.add('card-image-' + randomNumber);
}
function show2() {
  randomNumber = Math.floor(Math.random() * 8) - 4;
  Btn2.classList.remove('backside');
  Btn2.classList.add('card-image-' + randomNumber);
}
function show3() {
  randomNumber = Math.floor(Math.random() * 8) - 4;
  Btn3.classList.remove('backside');
  Btn3.classList.add('card-image-' + randomNumber);
}
function show4() {
  randomNumber = Math.floor(Math.random() * 8) - 4;
  Btn4.classList.remove('backside');
  Btn4.classList.add('card-image-' + randomNumber);
}
function show5() {
  randomNumber = Math.floor(Math.random() * 8) - 4;
  Btn5.classList.remove('backside');
  Btn5.classList.add('card-image-' + randomNumber);
}
function show6() {
  randomNumber = Math.floor(Math.random() * 8) - 4;
  Btn6.classList.remove('backside');
  Btn6.classList.add('card-image-' + randomNumber);
}
function show7() {
  randomNumber = Math.floor(Math.random() * 8) - 4;
  Btn7.classList.remove('backside');
  Btn7.classList.add('card-image-' + randomNumber);
}

Btn1.addEventListener('click', show1);
Btn2.addEventListener('click', show2);
Btn3.addEventListener('click', show3);
Btn4.addEventListener('click', show4);
Btn5.addEventListener('click', show5);
Btn6.addEventListener('click', show6);
Btn7.addEventListener('click', show7);
