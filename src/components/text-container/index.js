import { html } from "htm/preact";
import { RegularTextNode } from "../text-nodes/regularText";
import { AH } from "../component_map";

const TextContainer = ({ nodes = [], className="" }) => {
  return html`
    <div className="flex flex-col ${className}">
      ${nodes.map((node) => {
        switch (node._type) {
          case "regularTextNode":
            return html`<${RegularTextNode} ...${node} />`;
          case "animatedTextNode":
            return html`<${AH.AnimatedTextNode} ...${node} />`;
          default:
            return html`<span></span>`;
        }
      })}
    </div>
  `;
};

export { TextContainer };
