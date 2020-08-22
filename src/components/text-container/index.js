import { html } from "htm/preact";
import { TextNode } from './text-node';

const TextContainer = ({ align="", leading="", size="", type="", textNodes=[]}) => {
  return html`
  <div className="flex flex-col ${align} ${leading} ${size} ${type}">
    ${textNodes.map(textNode => html`
      <${TextNode} ...${textNode}/>
    `)}
  </div>
  `
}

export { TextContainer }
