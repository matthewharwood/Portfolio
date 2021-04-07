import {Spacers} from '../_parts/spacer';

export default {
  name: 'summary',
  title: 'Summary',
  type: 'document',
  fieldsets: [
    Spacers.fieldset,
  ],
  fields: [
    ...Spacers.fields,
    {
      name: 'number',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text'
    },
    {
      type: 'object',
      name: 'ui',
      fields: [
        {
          name: 'lgColumns',
          title: 'lgColumns',
          type: 'number'
        },
      ]
    },
    {
      name: 'alt',
      title: 'Alt',
      type: 'string'
    },
  ]
}
