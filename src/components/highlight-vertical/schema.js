export default {
  name: 'highlightVertical',
  title: 'Highlight Vertical',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'media',
      title: 'Media',
      type: "reference",
      to: [{ type: "media" }]
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
