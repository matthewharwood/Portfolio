import { html } from "htm/preact";
import { RegularTextNode } from "../text-nodes/regularText";
import { AH } from "../component_map";

const TextContainer = ({ nodes = [] }) => {
  return html`
    <div className="flex flex-col">
      ${nodes.map((node) => {
        switch (node._type) {
          case "regularTextNode":
            return html`<${RegularTextNode} ...${node} />`;
            break;
          case "animatedTextNode":
            return html`<${AH.AnimatedTextNode} ...${node} />`;
            break;
          default:
            return html`<span></span>`;
            break;
        }
      })}
    </div>
  `;
};

const textContainer = {
  name: "textContainer",
  title: "TextContainer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "nodes",
      title: "Nodes",
      type: "array",
      of: [{ type: "regularTextNode" }, { type: "animatedTextNode" }],
    },
  ],
};

export { TextContainer, textContainer };
