'use strict';

const container = document.querySelector('.container');
const p = document.querySelector('.text');

document.addEventListener('selectionchange', e => {
  console.log(e.target.getSelection());
});
