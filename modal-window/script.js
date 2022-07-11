'use strict';

const modalWindow = document.querySelector('.window');
const btnCloseModal = document.querySelector('.close');
const btnsOpenModal = document.querySelectorAll('.show');
const overlay = document.querySelector('.overlay');

for (let count = 0; count < btnsOpenModal.length; count++)
  btnsOpenModal[count].addEventListener('click', function () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

function hide() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', hide);
overlay.addEventListener('click', hide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) hide();
});
