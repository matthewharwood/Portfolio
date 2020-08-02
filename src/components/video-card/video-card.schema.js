export default {
  name: 'videoCard',
  title: 'Video Card',
  type: 'document',
  fields: [
    {
      type: 'image',
      name: 'poster',
      title: 'Poster'
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title'
    },
    {
      type: 'string',
      name: 'videoSrc',
      title: 'Video Src'
    },
  ]
}
