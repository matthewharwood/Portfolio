import { AH } from "../components/component_map";
import { html } from "htm/preact";
import { MediaGrid } from "../components/media-grid"

export const Test = () => {
  return html`
    <div className="pt-64 bg-gray-100">
      <${MediaGrid}/>
    </div>
  `;
};

