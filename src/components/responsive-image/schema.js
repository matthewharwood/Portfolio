import { calcForSanity } from '../../_data/aspect-ratios';

export default {
  name: 'responsiveImage',
  title: 'Responsive Image',
  type: 'document',
  fields: [
    {
      type: "string",
      name: "defaultAspectRatio",
      title: "Default Aspect Ratio",
      options: {
        list: [...calcForSanity('aspect-ratio')],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: 'aspect-ratio-4/5'
    },
    {
      type: "string",
      name: "lgAspectRatio",
      title: "Large Aspect Ratio",
      options: {
        list: [...calcForSanity('lg:aspect-ratio')],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: 'lg:aspect-ratio-16/9'
    },
    {
      name: 'defaultSrc',
      title: 'Default Source',
      type: 'image'
    },
    {
      name: 'lgSrc',
      title: 'Large Source',
      type: 'image'
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string'
    },
  ],
}
