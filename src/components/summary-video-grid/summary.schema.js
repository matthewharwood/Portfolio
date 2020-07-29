
export default {
  name: 'summaryVideoGrid',
  title: 'Summary Video Grid',
  type: 'document',
  fields: [
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
          {type: 'summaryMedia'}
      ],
    },
    {
      name: 'hasBorder',
      title: 'Has Border?',
      type: 'boolean'
    }
  ]
}
