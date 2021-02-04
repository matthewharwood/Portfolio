import {UI} from '../_parts/header';
import {Spacers} from '../_parts/spacer';

export default {
  name: "textOverShape",
  title: "Text Over Shape",
  type: "document",
  fieldsets: [
    Spacers.fieldset,
  ],
  fields: [
    ...Spacers.fields,
    ...UI,
    {
      name: "text",
      title: "Text",
      type: 'array',
      of: [{type: 'block'}]
    },

  ],
  preview: {
    select: {
      title: 'text'
    }
  }
};
