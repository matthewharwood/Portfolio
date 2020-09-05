import { html } from "htm/preact";
import { TextNode } from "../text-node";
import { AH } from "../../component_map";

export const ComposedTextNode = ({ 
  align = "",
  leading = "",
  size = "",
  type = "",
  textNodes = [],
  flexDirectionMobile = "flex-row",
  flexDirectionDesktop = "flex-row",
  flexAlign = "",
  flexJustify = ""
}) => {
  const mobileJustifyClass = (flexDirectionMobile === 'flex-row') ? flexJustify : "";
  const desktopJustifyClass = (flexDirectionDesktop === 'flex-row') ? `lg:${flexJustify}` : "";
  const mobileSpacerVisibleClass = (flexDirectionMobile === 'flex-row') ? 'inline' : 'hidden';
  const desktopSpacerVisibleClass = (flexDirectionDesktop === 'flex-row') ? 'lg:inline' : 'lg:hidden';
  const spacer = html`<span className="${size} ${mobileSpacerVisibleClass} ${desktopSpacerVisibleClass}">\xa0</span>`
  return html`
    <div className="flex ${align} ${leading} ${size} ${type} ${flexDirectionMobile} lg:${flexDirectionDesktop} ${mobileJustifyClass} ${desktopJustifyClass} lg:items-baseline">
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
