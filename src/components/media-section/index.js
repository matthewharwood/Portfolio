import { html } from "htm/preact";
import { MediaAspectRatio } from "../media-aspect-ratio"

export const MediaSection = (props) => {
  return html`
    <div className="container px-5 lg:px-16">
      <${MediaAspectRatio} ...${props.media} className="object-contain"/>
    </div>
  `
}
