WIP
export default {
  name: 'metadata',
  title: 'Metadata',
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

  ]
}
