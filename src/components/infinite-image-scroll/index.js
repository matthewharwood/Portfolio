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
  const iInMemory = images.map((item) => {
    const image = new Image();
    image.src = item;
    return image;
  });
  const imagesInMemory = [iInMemory].flat();

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
  const size = useWindowSize();
  const height = 800;
  const {images} = props;
  const widths = images.reduce((acc, val, idx) => {
    if(acc.length === 0) {
      return acc.concat(val.naturalWidth);
    }
    const total = acc[idx - 1] + val.naturalWidth
    return acc.concat(total);
  }, []);

  const draw = (ctx, frameCount) => {
    // ctx.clearRect(0, 0, size.width , size.height);
    images.forEach((img, index) => {
      const dx = index ? widths[index-1] : index;
      const dy = 0;
      ctx.drawImage(img, dx, dy);
    });
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
  const { context} = options;
  const canvasRef = useCanvas(draw, { context });
  return html`<canvas ref="${canvasRef}" ...${rest} className="w-full" />`;
};
