import { AspectRatios } from '../_parts/aspect-ratio'

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
      name: "showTitles",
      title: "Show Titles?",
      type: "boolean",
    },
    ...AspectRatios,
    {
      name: "mediaList",
      title: "Media List",
      type: "array",
      of: [{ type: "mediaAspectRatio" }],
    },
  ],
};
