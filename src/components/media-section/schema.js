import {Spacers} from '../_parts/spacer';

export default {
  name: "mediaSection",
  title: "Media Section",
  type: "object",
  fieldsets: [
    Spacers.fieldset,
  ],
  fields: [
    ...Spacers.fields,
    {
      name: "media",
      title: "Media",
      type: "mediaAspectRatio",
    }
  ],
  preview: {
    select: {
      title: 'media.alt'
    }
  }
}
