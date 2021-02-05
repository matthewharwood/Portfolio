import { html } from "htm/preact";
import {Image} from '../media';
import {Mono, Sans} from '../typography';

export const Highlight = ({
  isImageRight,
  imageCols = 6,
  subtitle,
  title,
  text,
  image,
}) => {
  const imageOrder = isImageRight ? "order-last" : "order-first";
  const imageColsClass = `lg:col-span-${imageCols}`;
  const textColsClass = `lg:col-span-${12 - imageCols}`;
  return html`
    <section
      className="container px-5 lg:px-16 grid grid-cols-12 lg:gap-10 py-16"
    >
      <div className="flex flex-col col-span-12 ${textColsClass}">
        <span className="${Sans.xl2} text-accent">${subtitle}</span>
        <h2 className="${Mono.xl4}">${title}</h2>
        <p className="mt-5 leading-loose ${Sans.lg}">${text}</p>
      </div>
      <div className="col-span-12 ${imageOrder} ${imageColsClass}">
        <${Image} src="${image}" alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  `;
};


