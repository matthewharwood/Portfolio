import { html } from "htm/preact";
import { Image } from "../media";
import { useWindowSize } from "../../hooks/use_window_size";
import { SpacingContainer } from "../_parts/spacer";

const SlideshowImage = ({ item, leftOffset }) => {
  return html`
    <div className="w-1/6 absolute px-1" style="${leftOffset}">
      <${Image} src="${item.imgSrc}" alt="" />
    </div>
  `;
};

const Slideshow = (props) => {
  const windowSize = useWindowSize();
  const offset = windowSize.width / 6;

  if (!(offset >= 0)) {
    return;
  }

  return html`
    <${SpacingContainer} ...${props} name="Slideshow">
      <div className="flex relative aspect-ratio-5/2 overflow-hidden">
        ${props.images.map((item, index) => {
          const leftOffset = { left: offset * index + "px" };
          return html`<${SlideshowImage}
            leftOffset="${leftOffset}"
            item="${item}"
          />`;
        })}
      </div>
    <//>
  `;
};

export { Slideshow };
