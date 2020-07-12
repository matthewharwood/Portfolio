export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'route',
      title: 'Route',
      type: 'reference',
      to: { type: 'route' },
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'video' },
        { type: 'interest' },
        { type: 'postHeader'},
        { type: 'summary'},
        { type: 'outline' },
        { type: 'highlight'},
        { type: 'highlightBold'},
        { type: 'quote'},
        { type: 'headline'},
        { type: 'cardTiles'},
        { type: 'stepCards'},
        { type: 'cardTilesVertical'},
      ],
    },
  ]
}
