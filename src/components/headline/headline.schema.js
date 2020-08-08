import {Header, UI} from '../_parts/header';

export default {
  name: 'headline',
  title: 'Headline',
  type: 'document',
  fields: [
    ...Header,
    ...UI,
  ]
}
