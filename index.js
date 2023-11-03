'use strict';
const container = document.querySelector('.container');
const draggable = document.querySelector('.draggable');

draggable.addEventListener('pointerdown', e => {
  const draggableItem = e.target.closest('.draggable__item');

  if (!draggableItem) return;

  let leftShift = draggableItem.getBoundingClientRect().left;

  draggable.addEventListener('dragstart', e => {
    e.preventDefault();
  });

  draggable.addEventListener('pointermove', e => {
    let newLeft = e.clientX;

    draggableItem.style.left = newLeft - leftShift + 'px';
  });

  function dragStart() {}
});
