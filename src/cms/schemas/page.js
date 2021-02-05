import {UI} from '../../components/_parts/header';

const of = [
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
  {type: 'cardIcons'},
  {type: 'categoryCards'},
  {type: 'mediaSection'},
  {type: 'mediaGrid'},
  {type: 'headlineVertical'},
  {type: 'textOverShape'},
  {type: 'highlightMedia'},
  {type: 'textSection'},
  {type: 'slideshow'},
  {type: 'hr'}
].sort(function(a, b){
  let nameA = a.type.toLowerCase(), nameB = b.type.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
});
const Content = {
  name: 'content',
  title: 'Content',
  type: 'array',
  of,
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
