import { html } from "htm/preact";
import { TextNode } from "./text-node";
import { AH } from "../component_map";

const TextContainer = ({
  hasContainer = false,
  align = "",
  leading = "",
  size = "",
  type = "",
  textNodes = [],
  className="",
  marginTop="",
  marginBottom="",
  colSpanMobile="col-span-4",
  colSpanDesktop="col-span-12",
}) => {
  const containerClass = hasContainer ? 'container' : '';
  return html`
    <div class="grid grid-cols-4 lg:grid-cols-12 ${containerClass} ${className}">
      <div className="${colSpanMobile} lg:${colSpanDesktop} flex flex-col ${align} ${leading} ${size} ${type} ${marginTop} ${marginBottom}">
        ${textNodes.map((node) => {
          if (node._type === "textNode") {
            return html`<${TextNode} ...${node} />`;
          }
          if (node._type === "animatedTextNode") {
            return html`<${AH.AnimatedTextNode} ...${node} />`;
          }
        })}
      </div>
    </div>
  `;
};

export { TextContainer };
