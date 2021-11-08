import { Header } from "../_parts/header";
import { Spacers, generateCustomSpacers } from "../_parts/spacer";

const ImageSpacer = generateCustomSpacers("image");

export default {
  name: "highlight",
  title: "Highlight",
  type: "document",
  fieldsets: [Spacers.fieldset, ImageSpacer.fieldset],
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
    ...ImageSpacer.fields,
    {
      name: "isImageRight",
      title: "Is Image Right?",
      type: "boolean",
    },
  ],
};
