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
  ],
  preview: {
    select: {
      person1: 'teammates.0.name', // <- authors.0 is a reference to author, and the preview component will automatically resolve the reference and return the name
      person2: 'teammates.1.name',
      person3: 'teammates.2.name',
    },
    prepare(selection) {
      const {person1, person2, person3} = selection
      return {
        title: [person1, person2, person3, "etc."].join(", "),
      }
    }
  }
}
