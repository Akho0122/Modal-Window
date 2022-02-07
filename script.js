'use strict';

const openModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const close = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const add = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', function () {
    close();
  });
}

closeModal.addEventListener('click', function () {
  add();
});
overlay.addEventListener('click', function () {
  add();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    add();
  }
});
