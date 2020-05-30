export default {
  name: 'outline',
  title: 'Outline',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{type: 'string'}],
    },
  ]
}
