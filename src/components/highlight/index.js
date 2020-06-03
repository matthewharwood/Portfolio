import { html } from "htm/preact";
import {useStatic} from '../../hooks/use_static';

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
        <span className="text-2xl text-accent">${subtitle}</span>
        <h2 className="text-5xl">${title}</h2>
        <p className="mt-5 leading-loose">${text}</p>
      </div>
      <div className="col-span-12 ${imageOrder} ${imageColsClass}">
        <img src="${useStatic(image)}" alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  `;
};


