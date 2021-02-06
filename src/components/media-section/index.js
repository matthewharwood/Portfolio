import { html } from "htm/preact";
import { MediaAspectRatio } from "../media-aspect-ratio"
import {generateSpacingClassString} from '../_parts/spacer';

export const MediaSection = (props) => {
  const containerClasses = "container px-5 lg:px-16";
  const spacingClasses = generateSpacingClassString(props);
  return html`
    <div className="relative ${containerClasses} ${spacingClasses}">
      <div>
        <${MediaAspectRatio} ...${props.media} className="object-contain"/>
      </div>
    </div>
  `
}
