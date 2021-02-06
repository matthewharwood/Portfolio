import {Header, UI} from '../_parts/header';
import {Spacers} from '../_parts/spacer';

export default {
  name: 'headline',
  title: 'Headline',
  type: 'document',
  fieldsets: [
    Spacers.fieldset,
  ],
  fields: [
    ...Spacers.fields,
    ...Header,
    ...UI,
  ]
}
