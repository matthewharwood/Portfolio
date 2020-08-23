import { html } from "htm/preact";
import { TextNode } from "./text-node";
import { AH } from "../component_map";

const TextContainer = ({
  align = "",
  leading = "",
  size = "",
  type = "",
  textNodes = [],
}) => {
  return html`
    <div className="flex flex-col ${align} ${leading} ${size} ${type}">
      ${textNodes.map((node) => {
        if (node._type === "textNode") {
          return html`<${TextNode} ...${node} />`;
        }
        if (node._type === "animatedTextNode") {
          return html`<${AH.AnimatedTextNode} ...${node} />`;
        }
      })}
    </div>
  `;
};

export { TextContainer };
