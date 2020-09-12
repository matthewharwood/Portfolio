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
      name: "media",
      title: "Media",
      type: "array",
      of: [{ type: "media" }],
    },
  ],
};
