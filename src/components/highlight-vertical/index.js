import { html } from "htm/preact";
import {Image} from '../media';

export const HighlightVertical = ({
  isImageRight,
  imageCols = 6,
  title,
  image,
}) => {
  const imageOrder = isImageRight ? "order-last" : "order-first";
  const imageColsClass = `col-span-6 lg:col-span-${imageCols}`;
  const textColsClass = `col-span-6 lg:col-span-${12 - imageCols}`;
  return html`
    <section
      className="container md:px-5 lg:px-16 grid grid-cols-12 lg:gap-10 py-8 lg:py-16 items-center"
    >
      <div className="flex flex-col ${textColsClass} h-full items-center justify-center">
        ${title.split("").map(char => char === " " ? "\xa0" : char).map(char => html`
          <span className="text-3xl md:text-5xl lg:text-6xl transform rotate-90 leading-none font-mono">${char}</span>
        `)}
      </div>
      <div className="${imageOrder} ${imageColsClass} bg-black h-full" style="min-height:500px">
        <${Image} src="${image}" alt="" className="h-full w-full object-cover object-right" />
      </div>
    </section>
  `;
};
