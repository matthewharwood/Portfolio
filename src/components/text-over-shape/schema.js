import {UI} from '../_parts/header';

export default {
  name: "textOverShape",
  title: "Text Over Shape",
  type: "document",
  fields: [
    ...UI,
    {
      name: "text",
      title: "Text",
      type: 'array',
      of: [{type: 'block'}]
    },
  ],
};
