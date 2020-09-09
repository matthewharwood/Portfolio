import { html } from "htm/preact";
import { TextNode } from "./text-node";
import { ComposedTextNode } from "./composed-text-node";
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
  flexDirectionMobile = "flex-col",
  flexDirectionDesktop = "flex-col",
  flexAlign = "items-stretch",
  flexJustify = "justify-start"
}) => {
  const containerClass = hasContainer ? 'container' : '';
  const mobileJustifyClass = (flexDirectionMobile === 'flex-row') ? flexJustify : "";
  const desktopJustifyClass = (flexDirectionDesktop === 'flex-row') ? `lg:${flexJustify}` : "";
  const mobileSpacerVisibleClass = (flexDirectionMobile === 'flex-row') ? 'inline' : 'hidden';
  const desktopSpacerVisibleClass = (flexDirectionDesktop === 'flex-row') ? 'lg:inline' : 'lg:hidden';
  const spacer = html`<span className="${size} ${mobileSpacerVisibleClass} ${desktopSpacerVisibleClass}">\xa0</span>`
  return html`
    <div class="grid grid-cols-4 lg:grid-cols-12 gap-10 ${containerClass} ${className} px-5 lg:px-16 my-10 lg:${marginTop} lg:${marginBottom}">
      <div className="${colSpanMobile} lg:${colSpanDesktop} flex ${align} ${leading} ${size} ${type} ${mobileJustifyClass} ${desktopJustifyClass} lg:items-baseline ${flexDirectionMobile} lg:${flexDirectionDesktop}">
        ${textNodes.map((node) => {
          if (node._type === "textNode") {
            return html`<${TextNode} ...${node}/> ${spacer}`;
          }
          if (node._type === "animatedTextNode") {
            return html`<${AH.AnimatedTextNode} ...${node} /> ${spacer}`;
          }
          if (node._type === "composedTextNode") {
            return html`<${ComposedTextNode} ...${node} /> ${spacer}`;
          }
        })}
      </div>
    </div>
  `;
};

export { TextContainer };
