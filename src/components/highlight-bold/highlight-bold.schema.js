/**
 *   isImageRight,
 imageCols = 6,
 subtitle,
 title,
 text,
 image,
 */
export default {
  name: 'highlightBold',
  title: 'Highlight Bold',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
  ]
}
