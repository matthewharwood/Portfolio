import { html } from "htm/preact";
import { Image } from "../media";
import { Mono, Sans } from "../typography";
import { SpacingContainer } from "../_parts/spacer";

export const Highlight = (props) => {
  const { isImageRight, imageCols = 6, subtitle, title, text, image } = props;
  const imageOrder = isImageRight ? "order-last" : "order-first";
  const imageColsClass = `lg:col-span-${imageCols}`;
  const textColsClass = `lg:col-span-${12 - imageCols}`;
  return html`
    <${SpacingContainer} ...${props} name="Summary">
      <div
        className="container grid grid-cols-12 lg:gap-10"
      >
        <div className="flex flex-col col-span-12 ${textColsClass}">
          <span className="${Sans.xl2} text-accent">${subtitle}</span>
          <h2 className="${Mono.xl4}">${title}</h2>
          <p className="mt-1 leading-loose ${Sans.lg}">${text}</p>
        </div>
        <div className="col-span-12 ${imageOrder} ${imageColsClass}">
          <${Image}
            src="${image}"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </${SpacingContainer}>
  `;
};
