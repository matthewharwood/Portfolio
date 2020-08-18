import { html } from "htm/preact";
import {Image} from '../media';

export const HighlightVertical = ({
  isImageRight,
  imageCols = 6,
  title,
  image,
}) => {
  const imageOrder = isImageRight ? "lg:order-last" : "lg:order-first";
  const imageColsClass = `lg:col-span-${imageCols}`;
  const textColsClass = `lg:col-span-${12 - imageCols}`;
  return html`
    <section
      className="container px-5 lg:px-16 grid grid-cols-12 lg:gap-10 py-16"
    >
      <div className="flex flex-col col-span-12 ${textColsClass}">
        <h2 className="text-4xl lg:text-huge transform whitespace-no-wrap lg:rotate-90">${title}</h2>
      </div>
      <div className="col-span-12 ${imageOrder} ${imageColsClass}">
        <${Image} src="${image}" alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  `;
};
