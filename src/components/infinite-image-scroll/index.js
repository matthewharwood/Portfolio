import { html } from "htm/preact";
import { useRef, useState, useEffect } from "preact/hooks";
import { useCanvas } from "../../hooks/use_canvas";
import { useWindowSize } from "../../hooks/use_window_size";

export const InfiniteImageScroll = () => {
  const images = [
    "https://via.placeholder.com/1080x1920",
    "https://via.placeholder.com/768x1366",
    "https://via.placeholder.com/1024x1280",
    "https://via.placeholder.com/1080x1920",
    "https://via.placeholder.com/768x1366",
    "https://via.placeholder.com/1024x1280",
    "https://via.placeholder.com/1080x1920",
    "https://via.placeholder.com/768x1366",
    "https://via.placeholder.com/1024x1280",
  ];
  return html`
    <div className="flex flex-col">
      <div
        className="container flex flex-col items-center text-center font-bold text-xl"
      >
        <span>With about</span>
        <h2 className="text-6xl my-5">
          <span>4,000,000</span>
          <span
            className="inline-block text-3xl transform rotate-45 -translate-y-5 translate-x-3"
            >'ish</span
          >
        </h2>
        <span>Pages</span>
      </div>
      <${ImagesLoop} />
    </div>
  `;
};

const ImagesLoop = () => {
  const numImages = 6;
  const size = useWindowSize();
  const height = 800;
  const widthPerImage = size.width / numImages;

  const images = [
    "https://via.placeholder.com/1080x1920?text=1",
    "https://via.placeholder.com/768x1366?text=2",
    "https://via.placeholder.com/1024x1280?text=3",
    "https://via.placeholder.com/1080x1920?text=4",
    "https://via.placeholder.com/768x1366?text=5",
    "https://via.placeholder.com/1024x1280?text=6",
    "https://via.placeholder.com/1080x1920?text=7",
    "https://via.placeholder.com/768x1366?text=8",
    "https://via.placeholder.com/1024x1280?text=9",
  ];

  const totalImagesWidth = images.length * widthPerImage;

  const draw = (ctx, frameCount) => {
    images.map((image, index) => {
      let xPos = widthPerImage * index - ( frameCount % widthPerImage ); // 250*0 - 250
      if (xPos < 1 - widthPerImage) {
        const firstElement = images.shift();
        images.push(firstElement);
        drawImage(ctx, image, xPos, 0);
        xPos = widthPerImage * index - ( frameCount % widthPerImage ); // 250*0 - 250
      } else {
        drawImage(ctx, image, xPos, 0);
      }
    });
  };

  const drawImage = (ctx, imageSrc, xCor = 0, yCor = 0) => {
    const image =
      typeof window !== "undefined" ? new Image(widthPerImage, height) : {};
    image.src = imageSrc;
    // console.log(image.height);
    ctx.drawImage(
      image,
      xCor,
      yCor,
      widthPerImage,
      Math.min(widthPerImage * 1.77, height)
    );
  };

  return html`
    <span>${JSON.stringify(size)}</span>
    <span>${JSON.stringify(widthPerImage)}</span>
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
