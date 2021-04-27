import {calcForSanity} from '../../_data/aspect-ratios';

export default {
  name: 'responsiveMedia',
  title: 'Responsive Media',
  type: 'document',
  fields: [
    {
      name: 'isVideo',
      title: 'Is Video',
      type: 'boolean'
    },
    {
      name: 'playState',
      title: 'Play State',
      type: 'string',
      options: {
        list: [{
          title: 'loop', value: 'loop',
        }, {
          title: 'controls', value: 'controls'
        }, {
          title: 'playOnce', value: 'playOnce'
        }],
      },
      initialValue: 'loop'
    },
    {
      name: 'responsiveImage',
      title: 'Responsive Image',
      type: 'responsiveImage',
    },
    {
      type: 'string',
      name: 'defaultVideoSrc',
      title: 'Default Video Src'
    },
    {
      type: 'string',
      name: 'lgVideoSrc',
      title: 'Large Video Src'
    },
  ]
};
