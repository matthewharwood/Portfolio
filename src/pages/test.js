import { AH } from "../components/component_map";
import { html } from "htm/preact";
import { HeadlineVertical } from "../components/headline-vertical"

export const Test = () => {
  return html`
    <div className="pt-64 bg-gray-100">
      <${HeadlineVertical}/>
    </div>
  `;
};

