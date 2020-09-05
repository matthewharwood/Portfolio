import { html } from "htm/preact";

const TextNode = ({ align="", leading="", size="", type="", text=""}) => {
  return html`
    <span className="${align} ${leading} ${size} ${type}">${text}</span>
  `
}

export { TextNode };
