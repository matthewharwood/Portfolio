import {Spacers} from '../_parts/spacer';

export default {
  name: 'outline',
  title: 'Outline',
  type: 'document',
  fieldsets: [
    Spacers.fieldset,
  ],
  fields: [
    ...Spacers.fields,
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{type: 'customField'}],
    },
    {
      name: 'hasDescriptions',
      title: 'Has Description?',
      type: 'boolean',
    }
  ]
}
