import { html } from "htm/preact";

import { useCanvas } from "../../hooks/use_canvas";
import { useWindowSize } from "../../hooks/use_window_size";
import { useEffect, useState } from "preact/hooks";

export const InfiniteImageScroll = () => {
  const images = [
    "https://placebear.com/200/300",
    "https://placebear.com/300/400",
    "https://placebear.com/400/400",
    "https://placebear.com/450/300",
  ];
  const [completed, update] = useState(false);
  let imagesInMemory = images.map((item) => {
    const image = new Image();
    image.src = item;
    return image;
  });

  useEffect(() => {
    update(imagesInMemory.every((i) => i.complete));
  }, [completed, imagesInMemory, completed, update]);


  if(!completed) {
    return;
  }

  return html`
    <${ImagesLoop} images="${imagesInMemory}"/>
  `;
};

const ImagesLoop = (props) => {
  const numImages = 6;
  const size = useWindowSize();
  const height = 800;
  const widthPerImage = parseInt(size.width / numImages);
  const {images} = props;
  const widths = images.reduce((acc, val, idx) => {
    if(acc.length === 0) {
      return acc.concat(val.naturalWidth);
    }
    const total = acc[idx - 1] + val.naturalWidth
    return acc.concat(total);
  }, []);
  console.log(widths);
  const draw = (ctx, frameCount) => {
    images.forEach((img, index) => {
      const dx = index ? widths[index-1] : index;
      const dy = 0;
      ctx.drawImage(img, dx, dy);
    })


    // images.map((image, index) => {
    //   let xPos = widthPerImage * index - (frameCount % widthPerImage) - 1; // 250*0 - 250
    //   if (xPos + widthPerImage <= 0) {
    //     drawImage(ctx, image, xPos, 0);
    //     const firstElement = images.shift();
    //     images.push(firstElement);
    //     drawImage(ctx, image, xPos, 0);
    //   } else {
    //     drawImage(ctx, image, xPos, 0);
    //   }
    // });
  };

  const drawImage = (ctx, imageSrc, xCor = 0, yCor = 0) => {
    const image =
      typeof window !== "undefined" ? new Image(widthPerImage, height) : {};
    image.src = imageSrc;
    ctx.drawImage(
      image,
      xCor,
      yCor,
      widthPerImage,
      Math.min(widthPerImage * 1.77, height)
    );
  };

  return html`
    <${Canvas}
      draw="${draw}"
      options="${{}}"
      width="${size.width}"
      height="${height}"
    />
  `;
};

const Canvas = (props) => {
  const { draw, options, ...rest } = props;
  const { context, ...moreConfig } = options;
  const canvasRef = useCanvas(draw, { context });
  return html`<canvas ref="${canvasRef}" ...${rest} className="w-full" />`;
};
