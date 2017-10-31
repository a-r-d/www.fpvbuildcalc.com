// npm install merge-img

const mergeImg = require('./merge-img/merge-img/lib')
const fs = require('fs')
const path = require('path')
const dir = './public/images'

function getFiles(cb) {
  fs.readdir('./public/images', function(err, filenames) {
    if (err) {
      return cb(err);
    }
    const files = []
    filenames.forEach(function(filename) {
      files.push(path.join(dir, filename))
    });
    return cb(null, files)
  });
}

console.log('Reading dir', dir)
getFiles((err, files) => {
  console.log('got files', err, files, 'size: ', files.length)
  mergeImg(files, {
    transformMap: (img) => {
      console.log('transform', img)
      // img.img is Jimp object.
      img.img.scaleToFit(50,50)
      img.x = 50 * img.index;
      img.y = 50 * img.index
      return img;
    }
  })
    .then(({baseImage, imgData}) => {
      // Save image as file
      console.log('Writing file')
      const info = [];
      imgData.forEach((img) => {
        const imgInfo = {
          src: img.src,
          w: img.img.bitmap.width,
          h: img.img.bitmap.height,
          offsetX: img.offsetX,
          offsetY: img.offsetY,
          x: img.x,
          y: img.y,
          index: img.index,
        }
        //console.log("Image info", imgInfo);
        info.push(imgInfo)
      })
      baseImage.quality(90)
      baseImage.write('./public/img/all-combined-50.png', () => console.log('done'));
      fs.writeFileSync(('./src/config/img-map.js'), `export default ${JSON.stringify(info, null, 2)}`, 'utf8')
    }).catch((err) => {
      console.error(err)
    });
})
