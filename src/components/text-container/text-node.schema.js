import { TextProps } from '../_parts/text';

export default {
  name: "textNode",
  title: "Text Node",
  type: "document",
  fields: [
    ...TextProps,
    {
      type: "string",
      name: "text",
      title: "Text",
    }
  ],
  initialValue: {
    size: "base",
    type: "sans",
    align: "left",
    leading: "normal",
  },
};
