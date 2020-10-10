import { h } from "preact";
import { HighlightMedia } from "./index";

export default {
  title: "Highlight Media",
};

const FIXTURE = {
  _key: "3b3da04d0f3b",
  _type: "highlightMedia",
  isMediaRight: false,
  media: {
    _type: "mediaAspectRatio",
    alt: "TestMedia",
    aspectRatio: "aspect-ratio-4/3",
    imgSrc: {
      _type: "image",
      asset: {
        _createdAt: "2020-09-21T18:10:53Z",
        _id: "image-08b45b693628db2b68f650d141d27433effe2566-416x276-png",
        _rev: "DG1NYUnKC3SofcefonUXDJ",
        _type: "sanity.imageAsset",
        _updatedAt: "2020-09-21T18:10:53Z",
        assetId: "08b45b693628db2b68f650d141d27433effe2566",
        extension: "png",
        metadata: {
          _type: "sanity.imageMetadata",
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 1.5072463768115942,
            height: 276,
            width: 416,
          },
          hasAlpha: true,
          isOpaque: true,
          lqip:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADbklEQVQ4y4WT6U/TBxjHf//RXizZJhmRsSEisCFXEaUFB8h9yDVuK4igDCHOzSlMM0tcWFeQ9kfLVRCKLVBoKZdyRIVBBdpCD9jLz36aLNu7vfjkOfM8yZPvI2Sd/YicqI/Jjw0iLzaYjIggMs9J/vlg8uNOU5gQQkHCafJkX5KXEkVheiJlBRl8dzWHmuJ0aosUFGXKyEmNISs5AkGvTEC8LkNTI0PdkI2hsw2T5lemxW4sOhUzA93MiE+wiCqmRzTMTuqZt4xjs4xhGfyNEVUT2gdVaLuuIT5uRLB1pDLZdBGxPIHxjhre2MwcHTjxufcIHLn4y+fGu7XKztwouw4TB5sLuN6zbuWd3cDm8A8s9SpZ0DRg72tBECvj6au4QG95ClMPm3m9aGV7e/sDLpebk2M/zoUpZh9ex3yviunOJmY6b2Lvvs1izy2Wf1eyqq5kqadcypUi9JbF86w+A31TAdand1mzT7O+scHW1hZuj4djv483JgMTDemMlX6NIT+S/ivn0JXK0NYpGGvNwNGVy0p3AYuqAoSp5mR09XI05XIm7imZN2pZsVvZ235N4PAA/8EurwxqjBUXeZ4TylRRKBMlX6EvjqInPwa9dPv5O3KW7l/G8UsWwuqPlxiui+NJ2ln6SlIwP77BkvYn3o6qcJrUrA+pGG2rRi0/w0Dip1gKQ3l5KxprQzS6okhGquOwtyax8P0F5tovIWx2pmC7I6M3N5ynaWcYrZU2tqbgaJVLjQoGa5N4dDkcVVwQfTGfYFQEs1AdjuNGBEOlYYxWRmO/nYitJQGz8jzCbFsSVmmgse4b1Nlh9OeGYSwLx1QVwWRtJJrCMLpSQ+iRh6CVncKQ+BlG+SnMVz9nrOILxmsisTXHM3czHtO1WISh9kKMHXmMt+egb/wWsV7BUGMaU+1XsN7Pw9iWhdiYyYgyg+GSZIZy4xnJjuNFRSJzLQrsd7NY+jkfx4Ni5h/VIKzNGHllHmTthZ6V5/04JPEuj2nYNGt5OzvAhllkzSTZyQFWDL0s69S8FNVsDv7B1vgzdqT67qyBnXlJpytmhIDPi997hO/Ig8e1z57zT/adO7j2nbj3333I+Q7d+KW61yOJ3O3G5/kX/6FHegAJ7yEBvxfh5OSEfwgEAvh8Pvx+P37Jfx8Hjo85/k/P//E38Z4ENO9kDqEAAAAASUVORK5CYII=",
          palette: {
            _type: "sanity.imagePalette",
            darkMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#261412",
              foreground: "#fff",
              population: 7.77,
              title: "#fff",
            },
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#8e3c29",
              foreground: "#fff",
              population: 8.9,
              title: "#fff",
            },
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#8e3c29",
              foreground: "#fff",
              population: 8.9,
              title: "#fff",
            },
            lightMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#d7c0a7",
              foreground: "#000",
              population: 4.78,
              title: "#fff",
            },
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#f8d279",
              foreground: "#000",
              population: 0.55,
              title: "#000",
            },
            muted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#a67d63",
              foreground: "#fff",
              population: 0.94,
              title: "#fff",
            },
            vibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#de8b37",
              foreground: "#000",
              population: 0.78,
              title: "#fff",
            },
          },
        },
        mimeType: "image/png",
        originalFilename: "e2eThumbnail_jrvug1.png",
        path:
          "images/0eq54p9g/production/08b45b693628db2b68f650d141d27433effe2566-416x276.png",
        sha1hash: "08b45b693628db2b68f650d141d27433effe2566",
        size: 164542,
        source: {
          id:
            "eyJwdWJsaWNfaWQiOiJ1YmVyL2UyZVRodW1ibmFpbF9qcnZ1ZzEiLCJyZXNvdXJjZV90eXBlIjoiaW1hZ2UiLCJ0eXBlIjoidXBsb2FkIn0=",
          name: "cloudinary:morningharwood",
        },
        uploadId: "sKb1iBwM99pFAFCNDe3thgOOEfbVga6m",
        url:
          "https://cdn.sanity.io/images/0eq54p9g/production/08b45b693628db2b68f650d141d27433effe2566-416x276.png",
      },
    },
    type: "image",
  },
  mediaColSize: 6,
  mediaType: "popupThumbnail",
  text: {
    _type: "textContainer",
    nodes: [
      {
        _key: "2eba7cd06214",
        _type: "regularTextNode",
        className: "text-3xl font-mono",
        text: "Optimising",
      },
      {
        _key: "584c9a648505",
        _type: "regularTextNode",
        className: "text-xl font-sans",
        text:
          "A base FusionJS app is roughly 60kbs and our app was a whooping 1.2mbs this gave me a the confidence to set a pretty straightforward goal:",
      },
    ],
  },
  title: "Test Highligh Media",
};

export const Main = () => {
  return <HighlightMedia {...FIXTURE} />;
};
