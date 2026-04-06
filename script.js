let draggedItem;

document.querySelectorAll('.item').forEach(setupItem);

function setupItem(item) {
  item.addEventListener('dragstart', onDragItem);
}

function onDragItem(event) {
  draggedItem = event.target;
  console.log(draggedItem.getAttribute('aria-label'));
}
