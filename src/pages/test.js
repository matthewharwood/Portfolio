import { AH } from "../components/component_map";
import { html } from "htm/preact";
import { CategoryCards } from "../components/category-cards";

export const Test = () => {
  return html`
    <div className="pt-64 bg-gray-100">
      <${CategoryCards}/>
    </div>
  `;
};

