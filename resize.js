const fs = require('fs');
const path = require('path');

try {
  const sharp = require('sharp');
  const imagePath = 'e:\designagency\Designagency\frontend\design-agency\src\assets\image.png';
  
  sharp(imagePath)
    .resize(Math.round(0.8), Math.round(0.8), { withoutEnlargement: false })
    .toFile(imagePath)
    .then(() => console.log('Image resized to 80%'))
    .catch(err => console.error('Error:', err.message));
} catch (e) {
  console.log('Sharp not available, trying jimp...');
  const Jimp = require('jimp');
  const imagePath = 'e:\designagency\Designagency\frontend\design-agency\src\assets\image.png';
  
  Jimp.read(imagePath)
    .then(image => {
      return image
        .resize(Math.round(image.bitmap.width * 0.8), Math.round(image.bitmap.height * 0.8))
        .write(imagePath);
    })
    .then(() => console.log('Image resized to 80%'))
    .catch(err => console.error('Error:', err.message));
}
