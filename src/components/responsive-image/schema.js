import { calcForSanity } from '../../_data/aspect-ratios';

export default {
  name: 'responsiveImage',
  title: 'Responsive Image',
  type: 'document',
  fields: [
    {
      type: "aspectRatio",
      name: "aspectRatios",
      title: "Aspect Ratios",
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
