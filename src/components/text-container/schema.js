import { TextProps } from "../_parts/text";
import { Spacers } from "../_parts/spacer";
import { Spans } from "../_parts/grid";

export default {
  name: "textContainer",
  title: "Text Container",
  type: "document",
  fields: [
    ...TextProps,
    ...Spacers,
    ...Spans,
    {
      type: "boolean",
      name: "hasContainer",
      title: "Has Container?",
    },
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
