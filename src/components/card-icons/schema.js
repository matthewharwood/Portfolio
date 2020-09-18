export default {
  name: "cardIcons",
  title: "Card Icons",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Text",
      type: "textContainer",
    },
    {
      name: "icons",
      title: "Icons",
      type: "array",
      of: [{ type: "media" }],
    },
  ],
};
