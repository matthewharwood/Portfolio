import {Spacers} from '../_parts/spacer';

export default {
  name: "cardIcons",
  title: "Card Icons",
  type: "document",
  fieldsets: [
    Spacers.fieldset,
  ],
  fields: [
    ...Spacers.fields,
    {
      name: "icons",
      title: "Icons",
      type: "array",
      of: [{ type: "media" }],
    },
  ],
  preview: {
    select: {
      icon1: 'icons.0.alt', // <- authors.0 is a reference to author, and the preview component will automatically resolve the reference and return the alt
      icon2: 'icons.1.alt',
      icon3: 'icons.2.alt',
    },
    prepare(selection) {
      const {icon1, icon2, icon3} = selection
      return {
        title: [icon1, icon2, icon3, "etc."].join(", "),
      }
    }
  }
};
