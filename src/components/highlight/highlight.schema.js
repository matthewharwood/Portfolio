
export default {
  name: 'highlight',
  title: 'Highlight',
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
    {
      name: 'imageCols',
      title: 'Image Columns',
      type: 'number',
      validation: Rule => Rule.required().integer().min(1).max(9),
    },
    {
      name: 'isImageRight',
      title: 'Is Image Right?',
      type: 'boolean',
    }
  ]
}
