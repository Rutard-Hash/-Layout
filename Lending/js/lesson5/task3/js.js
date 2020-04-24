'use strict';

const openBtn = document.querySelector('.button');
const closeBtn = document.querySelector('span');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
});