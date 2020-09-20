import { AspectRatios } from '../_parts/aspect-ratio'

export default {
  name: 'mediaAspectRatio',
  title: 'Media Aspect Ratio',
  type: 'document',
  fields: [
    ...AspectRatios,
    {
      name: 'alt',
      title: 'Alt (Title)',
      type: 'string'
    },
    {
      name: 'type',
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
        direction: "horizontal",
      }
    },
    {
      name: 'imgSrc',
      title: 'Image Source',
      type: 'image'
    },
    {
      name: 'videoSrc',
      title: 'Video Source',
      type: 'string'
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image'
    },
  ],
}
