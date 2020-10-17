import { html } from "htm/preact";
import { AH } from "../component_map";
import { generateSpacingClassString } from '../_parts/spacer';
import { TextContainer } from "../text-container";
import { MediaAspectRatio } from "../media-aspect-ratio"

export const HighlightMedia = (props) => {
  const mediaOrder = props.isMediaRight ? "order-last" : "order-first";
  const mediaColSize = props.mediaColSize || "6";
  const mediaType = props.mediaType || "media";
  const spacingClasses = generateSpacingClassString(props);
  return html`
    <div className="container px-5 lg:px-16 grid grid-cols-12 gap-10 ${spacingClasses}">
      <${TextContainer} nodes="${props.text.nodes}" className="col-span-12 lg:col-span-${12-mediaColSize}"/>
      <div className="col-span-12 lg:col-span-${mediaColSize} ${mediaOrder}">
        ${mediaType === 'media' ? html`
          <${MediaAspectRatio} ...${props.media}/>
        ` : html`
          <${AH.MediaThumbnail} media="${props.media}"/>
        `}
      </div>
    </div>
  `;
};


