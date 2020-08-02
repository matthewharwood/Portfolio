export default {
  name: 'videoCardGrid',
  title: 'Video Card Grid',
  type: 'document',
  fields: [
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
