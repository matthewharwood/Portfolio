import { html } from "htm/preact";
import { MediaAspectRatio } from "../media-aspect-ratio"

const mediaProps = {
  _createdAt: "2020-08-31T23:26:57Z",
  _id: "74b4c538-1e38-4895-b7b1-27e6693a3e9e",
  _rev: "RaV9g1UeS1tVjto6tcMjuY",
  _type: "media",
  _updatedAt: "2020-08-31T23:26:57Z",
  alt: "World Center",
  imgSrc: {
    _type: "image",
    asset: {
      _createdAt: "2020-08-31T23:26:55Z",
      _id: "image-58bb8eab15c3495bee10c4666ad8fd2ce2ee6a29-379x379-png",
      _rev: "PYtyB8onJmnyJVbdcGTJcc",
      _type: "sanity.imageAsset",
      _updatedAt: "2020-08-31T23:26:55Z",
      assetId: "58bb8eab15c3495bee10c4666ad8fd2ce2ee6a29",
      extension: "png",
      metadata: {
        _type: "sanity.imageMetadata",
        dimensions: {
          _type: "sanity.imageDimensions",
          aspectRatio: 1,
          height: 379,
          width: 379,
        },
        hasAlpha: true,
        isOpaque: false,
        lqip:
          "data:image/png;base64,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",
        palette: {
          _type: "sanity.imagePalette",
          darkMuted: {
            _type: "sanity.imagePaletteSwatch",
            background: "#3a344d",
            foreground: "#fff",
            population: 0.02,
            title: "#fff",
          },
          darkVibrant: {
            _type: "sanity.imagePaletteSwatch",
            background: "#140505",
            foreground: "#fff",
            population: 0.19,
            title: "#fff",
          },
          dominant: {
            _type: "sanity.imagePaletteSwatch",
            background: "#aa7983",
            foreground: "#fff",
            population: 5.04,
            title: "#fff",
          },
          lightMuted: {
            _type: "sanity.imagePaletteSwatch",
            background: "#cfbda6",
            foreground: "#000",
            population: 4.61,
            title: "#fff",
          },
          lightVibrant: {
            _type: "sanity.imagePaletteSwatch",
            background: "#e7a981",
            foreground: "#000",
            population: 0.88,
            title: "#fff",
          },
          muted: {
            _type: "sanity.imagePaletteSwatch",
            background: "#aa7983",
            foreground: "#fff",
            population: 5.04,
            title: "#fff",
          },
          vibrant: {
            _type: "sanity.imagePaletteSwatch",
            background: "#49dca6",
            foreground: "#000",
            population: 0,
            title: "#fff",
          },
        },
      },
      mimeType: "image/png",
      originalFilename: "world-mobile_idw8wt.png",
      path:
        "images/0eq54p9g/production/58bb8eab15c3495bee10c4666ad8fd2ce2ee6a29-379x379.png",
      sha1hash: "58bb8eab15c3495bee10c4666ad8fd2ce2ee6a29",
      size: 264860,
      source: {
        id:
          "eyJwdWJsaWNfaWQiOiJ1YmVyL3dvcmxkLW1vYmlsZV9pZHc4d3QiLCJyZXNvdXJjZV90eXBlIjoiaW1hZ2UiLCJ0eXBlIjoidXBsb2FkIn0=",
        name: "cloudinary:morningharwood",
      },
      uploadId: "5dqgIA7uo68AaHmq41KyDkx75PApmFz6",
      url:
        "https://cdn.sanity.io/images/0eq54p9g/production/58bb8eab15c3495bee10c4666ad8fd2ce2ee6a29-379x379.png",
    },
  },
  type: "image",
  aspectRatio:"aspect-ratio-16/9"
};

export const MediaSection = (props) => {
  return html`
    <div className="container px-5 lg:px-16">
      <${MediaAspectRatio} ...${props.media} className="object-contain"/>
    </div>
  `
}
