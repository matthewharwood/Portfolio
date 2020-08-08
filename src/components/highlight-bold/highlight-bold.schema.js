import {Header, UI} from '../_parts/header';

export default {
  name: 'highlightBold',
  title: 'Highlight Bold',
  type: 'document',
  fields: [
    ...Header,
    {
      name: 'ui',
      title: 'UI',
      type: 'object',
      fields: [
        ...UI,
      ]
    }
  ]
}
