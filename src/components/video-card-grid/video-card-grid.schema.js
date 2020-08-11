export default {
  name: 'videoCardGrid',
  title: 'Video Card Grid',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Block Title',
      type: 'string',
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'videoCard',
        }
      ],
    },
  ]
}
