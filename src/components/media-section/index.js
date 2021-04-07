import { html } from "htm/preact";
import { MediaAspectRatio } from "../media-aspect-ratio"
import {SpacingContainer} from '../_parts/spacer';

export const MediaSection = (props) => {
  return html`
    <${SpacingContainer} ...${props} name="MediaSection">
      <div className="container">
        <${MediaAspectRatio} ...${props.media} className="object-contain"/>
      </div>
    <//>
  `
}
