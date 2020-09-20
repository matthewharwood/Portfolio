import { TextProps } from "../_parts/text";
import { Flex } from "../_parts/flex";
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
    ...Flex,
    {
      type: "boolean",
      name: "hasContainer",
      title: "Has Container?",
    },
    {
      type: "array",
      name: "textNodes",
      title: "Text Nodes",
      of: [{ type: "textNode" }, { type: "animatedTextNode" }, { type: "composedTextNode" }],
    },
  ],
};
