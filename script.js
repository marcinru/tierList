let draggedItem;

document.querySelectorAll('.item').forEach(setupItem);
document.querySelectorAll('.drop-zone').forEach(setupDropzone);

function setupItem(item) {
  item.addEventListener('dragstart', onDrag);
}

function setupDropzone(dropzone) {
  dropzone.addEventListener('dragover', function (event) {
    event.preventDefault();
  });
  dropzone.addEventListener('drop', onDrop);
}

function onDrag(event) {
  draggedItem = event.target;
  console.log(draggedItem.getAttribute('aria-label'));
}

function onDrop() {
  if (this !== draggedItem.parentNode) {
    this.appendChild(draggedItem);
  }
}
