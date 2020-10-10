import { html } from "htm/preact";
import { AH } from "../component_map";
import { TextContainer } from "../text-container";
import { MediaAspectRatio } from "../media-aspect-ratio"

export const HighlightMedia = ({ mediaColSize="6", isMediaRight=true, media, title, text, mediaType="media" }) => {
  const mediaOrder = isMediaRight ? "order-last" : "order-first";
  return html`
    <div className="container px-5 lg:px-16 grid grid-cols-12 gap-10">
      <${TextContainer} nodes="${text.nodes}" className="col-span-12 lg:col-span-${12-mediaColSize}"/>
      <div className="col-span-12 lg:col-span-${mediaColSize} ${mediaOrder}">
        ${mediaType === 'media' ? html`
          <${MediaAspectRatio} ...${media}/>
        ` : html`
          <${AH.MediaThumbnail} media="${media}"/>
        `}
      </div>
    </div>
  `;
};


