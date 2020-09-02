import {UI} from '../../components/_parts/header';

const Content = {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {type: 'video'},
    {type: 'interest'},
    {type: 'postHeader'},
    {type: 'summary'},
    {type: 'outline'},
    {type: 'highlight'},
    {type: 'highlightBold'},
    {type: 'quote'},
    {type: 'headline'},
    {type: 'cardTiles'},
    {type: 'stepCards'},
    {type: 'cardTilesVertical'},
    {type: 'videoCardGrid'},
    {type: 'primaryButton'},
    {type: 'highlightVideo'},
    {type: 'teamBubbles'},
    {type: 'highlightVertical'},
    {type: 'sandwichLayout'},
    {type: 'textContainer'}
  ],
};

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'route',
      title: 'Route',
      type: 'reference',
      to: {type: 'route'},
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'section',
      title: 'Section',
      type: 'array',
      of: [{
        name: 'wrapper',
        title: 'Wrapper',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'title',
            type: 'string',
          },
          ...UI,
          Content,
        ]
      }],
    },
    Content,
  ]
};
