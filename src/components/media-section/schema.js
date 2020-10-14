export default {
  name: "mediaSection",
  title: "Media Section",
  type: "object",
  fields: [
    {
      name: "media",
      title: "Media",
      type: "mediaAspectRatio",
    }
  ],
  preview: {
    select: {
      title: 'media.alt'
    }
  }
}
