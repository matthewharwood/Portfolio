import { html } from "htm/preact";
import { generateSpacingClassString, Spacers } from "../_parts/spacer";

const RegularTextNode = (props) => {
  const spacingClasses = generateSpacingClassString(props);
  return html`
    <span className="${props.classNameRegular} ${spacingClasses}"
      >${props.text}</span
    >
  `;
};

const regularTextNode = {
  name: "regularTextNode",
  title: "Regular Text Node",
  type: "object",
  fieldsets: [Spacers.fieldset],
  fields: [
    ...Spacers.fields,
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

export { RegularTextNode, regularTextNode };
