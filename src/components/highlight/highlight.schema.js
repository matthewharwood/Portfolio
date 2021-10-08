import { Header } from "../_parts/header";
import { Spacers, generateCustomSpacerFields } from "../_parts/spacer";

const TextSpacers = generateCustomSpacerFields("textBlockSpacer");

export default {
  name: "highlight",
  title: "Highlight",
  type: "document",
  fieldsets: [Spacers.fieldset, TextSpacers.fieldset],
  fields: [
    ...Spacers.fields,
    ...Header,
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "imageCols",
      title: "Image Columns",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(1).max(9),
    },
    {
      name: "isImageRight",
      title: "Is Image Right?",
      type: "boolean",
    },
    ...TextSpacers.fields,
  ],
};
