export const categoryCards = {
  name: "categoryCards",
  title: "Category Cards",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "categoryCard" }],
    },
  ],
};

export const categoryCard = {
  name: "categoryCard",
  title: "Category Card",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "categoryCardTag" }],
    },
  ],
};

export const categoryCardTag = {
  name: "categoryCardTag",
  title: "Category Card Tag",
  type: "document",
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "media",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};
