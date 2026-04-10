let draggedItem;

document.querySelectorAll('.item').forEach(setupItem);
document.querySelectorAll('.drop-zone').forEach(setupDropzone);

function setupItem(item) {
  item.addEventListener('dragstart', onDrag);
  item.addEventListener('dblclick', onDoubleClick);
}

function setupDropzone(dropzone) {
  dropzone.addEventListener('dragover', (e) => e.preventDefault());
  dropzone.addEventListener('drop', onDrop);
}

function onDrag(event) {
  draggedItem = event.target;
}

function onDrop() {
  if (this !== draggedItem.parentNode) {
    this.appendChild(draggedItem);
  }
}

function onDoubleClick() {
  const zone = document.getElementById('unranked');
  if (zone !== this.parentNode) {
    zone.appendChild(this);
  }
}
