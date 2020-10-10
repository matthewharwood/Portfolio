import { html } from "htm/preact";
import { MediaAspectRatio } from "../media-aspect-ratio"
import { useWindowSize } from "../../hooks/use_window_size";

export const MediaSection = (props) => {
  const containerClasses = "container px-5 lg:px-16";
  return html`
    <div className="relative ${containerClasses}">
      <div>
        <${MediaAspectRatio} ...${props.media} className="object-contain"/>
      </div>
    </div>
  `
}
