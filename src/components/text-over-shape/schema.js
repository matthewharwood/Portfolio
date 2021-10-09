import { UI } from "../_parts/header";
import { Spacers } from "../_parts/spacer";
import { MaxWidths } from "../_parts/max-width";

export default {
  name: "textOverShape",
  title: "Text Over Shape",
  type: "document",
  fieldsets: [Spacers.fieldset],
  fields: [
    ...Spacers.fields,
    ...UI,
    ...MaxWidths,
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "text",
    },
  },
};
