export default {
  name: "textContainer",
  title: "TextContainer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title (Just for reference)",
      type: "string",
    },
    {
      name: "nodes",
      title: "Nodes",
      type: "array",
      of: [{ type: "regularTextNode" }, { type: "animatedTextNode" }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
};


