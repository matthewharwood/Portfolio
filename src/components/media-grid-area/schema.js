import {Header} from '../_parts/header';

export default {
  name: "mediaGridArea",
  title: "Media Grid Area",
  type: "document",
  fields: [
    ...Header,
    {
      name: 'templateColumns',
      title: 'Grid Template Columns',
      type: 'string',
    },
    {
      name: 'templateRows',
      title: 'Grid Template rows',
      type: 'string',
    },
    {
      name: 'gap',
      title: 'Grid Gap',
      type: 'string',
    },
    {
      name: "templateArea",
      title: "Grid Template Area",
      type: "text",
    },
    {
      name: 'areas',
      title: 'Areas',
      type: 'array',
      of: [{
        name: 'item',
        title: 'Item',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'title',
            type: 'string'
          },
          {
            name: 'areaName',
            title: 'Area Name',
            type: 'string'
          },
          {
            name: 'media',
            title: 'Media',
            type: 'mediaAspectRatio'
          }
        ]
     }],
    },
  ],
};


