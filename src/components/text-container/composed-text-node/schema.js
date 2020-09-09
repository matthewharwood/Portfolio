import { TextProps } from "../../_parts/text";
import { Flex } from "../../_parts/flex";

export default {
  name: "composedTextNode",
  title: "Composed Text Node",
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
};
