const getImageLightness = (image, onLoad, onError) => {
  let canvas = document.createElement('canvas');

  image.crossOrigin = 'Anonymous';

  image.onload = function() {
    let colorSum = 0;
    let ctx;
    let imageData;
    let imageMetadata;
    let r;
    let g;
    let b;
    let average;

    canvas.width = this.width;
    canvas.height = this.height;
    ctx = canvas.getContext('2d');

    ctx.drawImage(this, 0, 0);

    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    imageMetadata = imageData.data;

    for (let x = 0, len = imageMetadata.length; x < len; x += 4) {
      r = imageMetadata[x];
      g = imageMetadata[x + 1];
      b = imageMetadata[x + 2];

      average = Math.floor((r + g + b) / 3);
      colorSum += average;
    }

    onLoad(Math.floor(colorSum / (this.width * this.height)));
  };

  image.onerror = onError;
};

export default getImageLightness;
