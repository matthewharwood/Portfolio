import { html } from "htm/preact";
import { TextNode } from "../text-node";
import { AH } from "../../component_map";

export const ComposedTextNode = ({ 
  align = "",
  leading = "",
  size = "",
  type = "",
  textNodes = [],
}) => {
  const spacer = html`<span className="${size}">\xa0</span>`
  return html`
    <div className="flex ${align} ${leading} ${size} ${type} lg:items-baseline">
      ${textNodes.map((node) => {
        if (node._type === "textNode") {
          return html`<${TextNode} ...${node} /> ${spacer}`;
        }
        if (node._type === "animatedTextNode") {
          return html`<${AH.AnimatedTextNode} ...${node} /> ${spacer}`;
        }
      })}
    </div>
  `;
};
