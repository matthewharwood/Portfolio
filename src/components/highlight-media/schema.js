import { Spacers, SpacerFieldset } from '../_parts/spacer';

export default {
  name: "highlightMedia",
  title: "Highlight Media",
  type: "object",
  fieldsets: [
    Spacers.fieldset,
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    ...Spacers.fields,
    {
      name: "text",
      title: "Text",
      type: 'textContainer', 
    },
    {
      name: "media",
      title: "Media",
      type: "mediaAspectRatio",
    },
    {
      name: "mediaColSize",
      title: "Media Column Size (out of 12)",
      type: "number",
    },
    {
      name: "isMediaRight",
      title: "Is Media on Right side?",
      type: "boolean",
    },
    {
      type: "string",
      name: "mediaType",
      title: "MediaType",
      options: {
        list: [
          { title: "media", value: "media" },
          { title: "popupThumbnail", value: "popupThumbnail" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }
  ],
};

