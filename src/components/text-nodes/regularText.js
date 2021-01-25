import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { useInterval } from "../../hooks/use_interval";
import { useIsVisible } from "../../hooks/use_is_visible";

const RegularTextNode = ({ text="", classNameRegular="" }) => {
  return html`
    <span className="${classNameRegular}">${text}</span>
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
      name: "classNameRegular",
      title: "Class Names",
      type: "string",
    },
  ],
};

export { RegularTextNode, regularTextNode }

