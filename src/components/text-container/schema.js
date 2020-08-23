import { TextProps } from "../_parts/text";

export default {
  name: "textContainer",
  title: "Text Container",
  type: "document",
  fields: [
    ...TextProps,
    {
      type: "array",
      name: "textNodes",
      title: "Text Nodes",
      of: [{ type: "textNode" }, { type: "animatedTextNode" }],
    },
  ],
  initialValue: {
    size: "base",
    type: "sans",
    align: "left",
    leading: "normal",
  },
};
