import {Header, UI} from '../_parts/header';

export default {
  name: 'highlightVideo',
  title: 'Highlight Video',
  type: 'document',
  fields: [
    ...Header,
    {
      name: 'video',
      title: 'Video',
      type: 'video',
    },
  ]
}
