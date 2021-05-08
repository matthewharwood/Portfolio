export const BlockColor = [
  {
    type: 'string',
    name: 'backgroundColorClasses',
    title: 'Background Color Classes',
    initialValue: 'bg-current',
    validation: Rule => Rule.required(),
  },
  {
    type: 'string',
    name: 'textColorClasses',
    title: 'Padding Classes',
    initialValue: 'text-current',
    validation: Rule => Rule.required(),
  }
];

