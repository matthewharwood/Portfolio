import {Link} from '../_parts/header';

export default {
  name: 'primaryButton',
  title: 'Primary Button',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: "Icon",
      type: 'string',
      options: {
        list: [
          {value: 'figma', title: 'Figma'},
        ]
      }
    },
    ...Link,
  ]
}
