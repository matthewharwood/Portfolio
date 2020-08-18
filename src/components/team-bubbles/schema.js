export default {
  name: 'teamBubbles',
  title: 'Team Bubbles',
  type: 'document',
  fields: [
    {
      type: 'array',
      name: 'teammates',
      title: 'Teammates',
      of: [
        {type: 'reference', to: {type: 'person'}}
      ]
    },
  ]
}
