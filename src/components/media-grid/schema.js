export default {
  name: "mediaGrid",
  title: "Media Grid",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "mediaList",
      title: "Media List",
      type: "array",
      of: [{ type: "mediaAspectRatio" }],
    },
  ],
};
