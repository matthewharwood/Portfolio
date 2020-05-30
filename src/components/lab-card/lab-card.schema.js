export default {
  name: 'labCard',
  title: 'Lab Card',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'href',
      title: 'Href',
      type: 'string'
    },
    {
      name: 'src',
      title: 'Video/Image',
      type: 'image'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'alt',
      title: 'Alt',
      type: 'string'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'tag'}],
    },
  ]
}
