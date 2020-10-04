import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { useInterval } from "../../hooks/use_interval";
import { useIsVisible } from "../../hooks/use_is_visible";

const RegularTextNode = ({ text="", className="" }) => {
  return html`
    <span className="${className}">${text}</span>
  `
}

const regularTextNode = {
  name: "regularTextNode",
  title: "Regular Text Node",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "className",
      title: "Class Names",
      type: "string",
    },
  ],
};

export { RegularTextNode, regularTextNode }

