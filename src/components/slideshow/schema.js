import {Spacers} from '../_parts/spacer';

export default {
  name: "slideshow",
  title: "Slideshow Layout",
  type: "document",
  fieldsets: [
    Spacers.fieldset,
  ],
  fields: [
    ...Spacers.fields,
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: "media" }],
    },
  ],
};
