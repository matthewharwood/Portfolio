import {Spacers} from '../_parts/spacer';

export const categoryCards = {
  name: "categoryCards",
  title: "Category Cards",
  type: "document",
  fieldsets: [
    Spacers.fieldset,
  ],
  fields: [
    ...Spacers.fields,
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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "category" }],
    },
  ],
};

export const category = {
  name: "category",
  title: "Category",
  type: "object",
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
      of: [{ type: "categoryCard" }],
    },
  ]
}

export const categoryCard = {
  name: "categoryCard",
  title: "Category Card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "media" }],
    },
  ],
};
