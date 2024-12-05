const images = document.querySelectorAll('.element');
const dialog = document.getElementById('image-dialog');
const dialogImage = document.getElementById('dialog-image');
const closeButton = document.getElementById('close-dialog');

images.forEach(image => {
  image.addEventListener('click', () => {
    dialogImage.src = image.src;
    dialog.showModal();
  });
});

closeButton.addEventListener('click', () => {
  dialog.close();
});

dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom 
  ) {
    dialog.close();
  }
});
