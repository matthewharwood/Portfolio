import { html } from "htm/preact";
import { MediaNew } from "../media/media";

export const MediaAspectRatio = (props) => {
  if (props.aspectRatio && props.aspectRatio !== 'aspect-ratio-none') {
    return html`
      <div className="relative">
        <div className="${props.aspectRatio} relative"></div>
        <${MediaNew} ...${props} className="absolute inset-0 h-full w-full ${props.className}" />
      </div>
    `;
  } else {
    return html`<${MediaNew} ...${props} />`;
  }
};
