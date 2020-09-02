const N = 4;
const gallery = document.querySelector('.gallery');
const fileNames = ['SpongeBob.png', 'Patrick.png', 'Squidward.png',
  'SandyWhite.jpg', 'Gary.png', 'KrabsWhite.jpeg', 'Plankton.png'];

const initialImageMatrix = (Array.from(Array(N).keys())).map(() => (
  (Array.from(Array(N).keys())).map(() => (
    fileNames[Math.floor(Math.random() * fileNames.length)]
  ))
));

const renderGallery = (imageMatrix) => {
  gallery.innerHTML = '';
  imageMatrix.forEach((row) => {
    row.forEach((fileName) => {
      const image = document.createElement('img');
      image.src = `./images/${fileName}`;
      gallery.appendChild(image);
    })
  })
}

renderGallery(initialImageMatrix);

let imageMatrixState = initialImageMatrix;
const updateCell = (i, j) => {
  setTimeout(() => {
    const imageMatrixStateNew = imageMatrixState;
    imageMatrixStateNew[i][j] = fileNames[Math.floor(Math.random() * fileNames.length)];
    renderGallery(imageMatrixStateNew);
    setTimeout(updateCell(i, j))
  }, (Math.floor(Math.random() * 60) + 10) * 10)
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    updateCell(i, j);
  }
 }
