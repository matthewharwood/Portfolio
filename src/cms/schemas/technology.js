
export default {
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',

    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'array',
      of: [
        {
          type: 'tag'
        },
      ],
    },
  ]
}
