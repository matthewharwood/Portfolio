import { AH } from "../components/component_map";
import { html } from "htm/preact";

export const Alt = () => {
  return html`
    <div className="pt-64 bg-gray-100">
      <${AH.MediaSection}/>
    </div>
  `;
};

