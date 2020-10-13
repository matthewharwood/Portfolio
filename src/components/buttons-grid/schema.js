export default {
  name: "buttonsGrid",
  title: "Buttons Grid",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {type: 'primaryButton'}
      ]
    }
  ],
};
