import { TextProps } from "../../_parts/text";

export default {
  name: "animatedTextNode",
  title: "Animated Text Node",
  type: "document",
  fields: [
    ...TextProps,
    {
      type: "string",
      name: "beforeText",
      title: "Before Text",
    },
    {
      type: "number",
      name: "start",
      title: "Start",
    },
    {
      type: "number",
      name: "end",
      title: "End",
    },
    {
      type: "number",
      name: "step",
      title: "Step",
    },
    {
      type: "string",
      name: "afterText",
      title: "After Text",
    },
  ],
};
