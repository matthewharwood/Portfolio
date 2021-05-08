import {BlockColor} from '../_parts/block-color';

export default {
  name: 'sectionContainer',
  title: 'Section Container',
  type: 'document',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      name: 'paddingClasses',
      title: 'Padding Classes',
      initialValue: 'py-12 px-8 lg:py-48 lg:px-5',
      validation: Rule => Rule.required(),
    },
    ...BlockColor,
    {
      type: 'string',
      name: 'displayClasses',
      title: 'Display Classes',
      initialValue: 'flex',
    },
    {
      type: 'string',
      name: 'marginClasses',
      title: 'margin Classes',
      initialValue: 'mx-auto',
    },
    {
      type: 'string',
      name: 'boxSizing',
      title: 'Box Sizing',
      options: {
        list: [{title: 'border-box', value: 'border-box'}, {title: 'content-box', value: 'content-box',}],
      },
      initialValue: 'border-box',
    },
    {
      type: 'string',
      name: 'positionClasses',
      title: 'PositionClasses',
      initialValue: 'relative'
    },
    {
      type: 'string',
      name: 'placementClasses',
      title: 'PlacementClasses',
    },
    {
      type: 'boolean',
      name: 'hasContainer',
      title: 'Has Container?',
      initialValue: true,
    },
    {
      type: 'boolean',
      name: 'hasFadeIn',
      title: 'Has Fade-in??',
      initialValue: true,
    },

  ]
};
