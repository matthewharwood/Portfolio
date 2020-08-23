export const TextProps = [
  {
    type: "string",
    name: "size",
    title: "Size",
    options: {
      list: [
        { title: "xs", value: "text-xs" },
        { title: "sm", value: "text-sm" },
        { title: "base", value: "text-base" },
        { title: "lg", value: "text-lg" },
        { title: "xl", value: "text-xl" },
        { title: "2xl", value: "text-2xl" },
        { title: "3xl", value: "text-3xl" },
        { title: "4xl", value: "text-4xl" },
        { title: "5xl", value: "text-5xl" },
        { title: "6xl", value: "text-6xl" },
      ],
    },
  },
  {
    type: "string",
    name: "type",
    title: "Type",
    options: {
      list: [
        { title: "mono", value: "font-mono" },
        { title: "sans", value: "font-sans" },
      ],
    },
  },
  {
    type: "string",
    name: "align",
    title: "Align",
    options: {
      list: [
        { title: "left", value: "text-left" },
        { title: "right", value: "text-right" },
        { title: "center", value: "text-center" },
      ],
    },
  },
  {
    type: "string",
    name: "leading",
    title: "Leading",
    options: {
      list: [
        { title: "none", value: "leading-none" },
        { title: "tight", value: "leading-tight" },
        { title: "snug", value: "leading-snug" },
        { title: "normal", value: "leading-normal" },
        { title: "relaxed", value: "leading-relaxed" },
        { title: "loose", value: "leading-loose" },
      ],
    },
  },
];
