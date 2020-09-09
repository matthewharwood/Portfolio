export const Flex = [
  {
    type: "string",
    name: "flexDirectionMobile",
    title: "Flex Direction (mobile)",
    options: {
      list: [
        { title: "Row", value: "flex-row" },
        { title: "Column", value: "flex-col" },
      ],
      layout: "radio",
      direction: "horizontal",
    },
  },
  {
    type: "string",
    name: "flexDirectionDesktop",
    title: "Flex Direction (desktop)",
    options: {
      list: [
        { title: "Row", value: "flex-row" },
        { title: "Column", value: "flex-col" },
      ],
      layout: "radio",
      direction: "horizontal",
    },
  },
  {
    type: "string",
    name: "flexAlign",
    title: "Flex Align (Only for Column)",
    options: {
      list: [
        { title: "Start", value: "items-start" },
        { title: "Center", value: "items-center" },
        { title: "End", value: "items-end" },
        { title: "Stretch", value: "items-stretch" },
      ],
      layout: "radio",
      direction: "horizontal",
    },
  },
  {
    type: "string",
    name: "flexJustify",
    title: "Flex Justify (Only for Row)",
    options: {
      list: [
        { title: "Start", value: "justify-start" },
        { title: "Center", value: "justify-center" },
        { title: "End", value: "justify-end" },
      ],
      layout: "radio",
      direction: "horizontal",
    },
  },
];
