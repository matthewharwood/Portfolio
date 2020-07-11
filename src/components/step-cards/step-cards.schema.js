
export const stepCard = {
  name: 'stepCard',
  title: 'Step Card',
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
      name: 'src',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    }
  ]
};

export const stepCards = {
  name: 'stepCards',
  title: 'Step Cards',
  type: 'document',
  fields: [
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {type: 'stepCard'}
      ],
    },
  ]
}
