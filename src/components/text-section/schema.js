import {Spacers} from '../_parts/spacer';

export default {
  name: "textSection",
  title: "Text Section",
  type: "document",
  fieldsets: [
    Spacers.fieldset,
  ],
  fields: [
    ...Spacers.fields,
    {
      name: "body",
      title: "Body",
      type: "textContainer",
    },
  ],
  preview: {
    select: {
      title: 'body.title',
    }
  }
};
