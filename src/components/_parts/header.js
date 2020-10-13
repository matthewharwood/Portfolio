export const Header = [
    {
      name: 'number',
      title: 'Number',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text'
    },
];

export const UI = [
  {
    name: 'backgroundColor',
    title: 'Background Color',
    type: 'string',
    options: {
      list: [
        {value: 'primary', title: 'Primary'}, {value: 'secondary', title: 'Secondary'}, {value: 'tertiary', title: 'Tertiary'},
      ]
    }
  },
  {
    name: 'hasBorder',
    title: 'has border?',
    type: 'boolean'
  },
];

export const Link = [
  {
    name: 'link',
    title: 'Link',
    type: 'string'
  },
  {
    name: 'ariaLabel',
    title: 'aria-label',
    type: 'string'
  },
  {
    name: 'href',
    title: 'HREF',
    type: 'string',
  },
  {
    name: 'target',
    title: 'target',
    type: 'string'
  }
]
