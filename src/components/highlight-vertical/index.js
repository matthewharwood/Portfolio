import { html } from "htm/preact";
import { Image } from "../media";
import { MediaNew } from "../media/media";

export const HighlightVertical = ({
  isImageRight,
  imageCols = 6,
  title,
  media,
}) => {
  const imageOrder = isImageRight ? "order-last" : "order-first";
  return html`
    <section
      className="container md:px-5 lg:px-16 py-8 lg:py-16 flex flex-col items-center"
    >
      <${MediaNew}
        ...${media}
        alt=""
        className="object-contain object-right w-1/2"
      />
    </section>
  `;
};
