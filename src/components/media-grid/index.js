import { html } from "htm/preact";
import { AH } from '../component_map';
import {MediaNew} from '../media/media';
import {MediaAspectRatio} from '../media-aspect-ratio';

export const MediaGrid = ({ mediaList, aspectRatio, showTitles=true, aspectRatioMobile }) => {
  return html`
    <div className="container px-5 lg:px-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
      ${mediaList.map(media => html`
        <div>
          <${MediaAspectRatio} ...${media}/>
          ${showTitles && html`<span>${media.alt}</span>`}
        </div>
      `)}
    </div>
  `;
};

