import { AH } from "../components/component_map";
import { html } from "htm/preact";
import { MediaSection } from "../components/media-section";

export const Test = () => {
  return html`
    <div className="pt-64 bg-gray-100">
      <${MediaSection}/>
    </div>
  `;
};

