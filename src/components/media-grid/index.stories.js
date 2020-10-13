import {h} from 'preact';
import {seed} from '../../_data/seed-data';
import {MediaGrid} from './';

export default {
  title: 'Media Grid'
};

const FIXTURE = {
  "_key": "70c9c22360a9",
  "_type": "mediaGrid",
  "aspectRatio": "aspect-ratio-3/2",
  "mediaList": [
    {
      "_key": "f9f4df7a1d6d",
      "_type": "mediaAspectRatio",
      "alt": "Components",
      "aspectRatio": "aspect-ratio-4/3",
      "poster": {
        "_type": "image",
        "asset": {
          "_createdAt": "2020-09-21T18:09:08Z",
          "_id": "image-758b92c1bcfcbaae9f57b496abb22b102fcd78b2-416x276-png",
          "_rev": "5uq0q6RNKnYRqMeJV1Ocpa",
          "_type": "sanity.imageAsset",
          "_updatedAt": "2020-09-21T18:09:08Z",
          "assetId": "758b92c1bcfcbaae9f57b496abb22b102fcd78b2",
          "extension": "png",
          "metadata": {
            "_type": "sanity.imageMetadata",
            "dimensions": {
              "_type": "sanity.imageDimensions",
              "aspectRatio": 1.5072463768115942,
              "height": 276,
              "width": 416
            },
            "hasAlpha": true,
            "isOpaque": true,
            "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7klEQVQ4y4WT23LTMBCG/f4vAq8A5AJmAi0QyiF02oG0hZI0+BxZWlkHh59d26EeJpSLbxQpq09r7SpJNxtkaYGyalDtTM9OGejGoFG6R34bTf+l4bgkS0tkxQ6VslDGo6GAtg3wLiC4+zH6iBj+TeD/He9Likr3WYnMWF70HXzoeIwDYZj7KOyPMKwHgeOSm8zgW26wrhyyJkK3DGeU8ydsd4TcONQ8r/3A7i8Oa4YP90wyvzEQTm4dlmlEqiMq67FKDU4vGyxWhK9pi9vaYa0cvvPBVwWPPL/TDls+MON4xYfKFyXvf2gIy22Lq5JlFFFqj8UXwuOZxqNnGk/fEk4vLM5WFvMlYfbO4OU54cO1xcW6xYbljdy7CLelxl2ukNUEJQVxHWod8Pm6xewN4ckJ4cUZ4fW5xYKl84+E5yx89YmwuCSOs9jkLbQdhUWtkZWKq0ygfpELwlLF0qLmu6yGsRyZrgmVCtA0FFMqneRc5UJ6j+9CqiwZRq5Wx9XbT+hG9t0ev5j9gTjQhYlQspP+0yyU1O3Yh33vTeF+6+K9ZIoIZU+SlQ2nPvShyDRxP5oWlloO8IPkT8ajoDuC9KFk+JNfSc7PbvjkwPfoQCyzPMqJIntQNBHKVSXpmOFBKM/OyXPzRzJ7AImTPb8B43HoUqClrD0AAAAASUVORK5CYII=",
            "palette": {
              "_type": "sanity.imagePalette",
              "darkMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#0a598e",
                "foreground": "#fff",
                "population": 0,
                "title": "#fff"
              },
              "darkVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#084d7b",
                "foreground": "#fff",
                "population": 0,
                "title": "#fff"
              },
              "dominant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#c6d3e1",
                "foreground": "#000",
                "population": 0.8,
                "title": "#000"
              },
              "lightMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#c6d3e1",
                "foreground": "#000",
                "population": 0.8,
                "title": "#000"
              },
              "lightVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#9af0fc",
                "foreground": "#000",
                "population": 0.12,
                "title": "#000"
              },
              "muted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#6782ae",
                "foreground": "#fff",
                "population": 0.02,
                "title": "#fff"
              },
              "vibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#1e9bef",
                "foreground": "#fff",
                "population": 0.32,
                "title": "#fff"
              }
            }
          },
          "mimeType": "image/png",
          "originalFilename": "storybookThumbnail_nn59ir.png",
          "path": "images/0eq54p9g/production/758b92c1bcfcbaae9f57b496abb22b102fcd78b2-416x276.png",
          "sha1hash": "758b92c1bcfcbaae9f57b496abb22b102fcd78b2",
          "size": 44914,
          "source": {
            "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3N0b3J5Ym9va1RodW1ibmFpbF9ubjU5aXIiLCJyZXNvdXJjZV90eXBlIjoiaW1hZ2UiLCJ0eXBlIjoidXBsb2FkIn0=",
            "name": "cloudinary:morningharwood"
          },
          "uploadId": "Rs1s2R8G8TIDqo3SnOSCz4F8YOX4NZCy",
          "url": "https://cdn.sanity.io/images/0eq54p9g/production/758b92c1bcfcbaae9f57b496abb22b102fcd78b2-416x276.png"
        }
      },
      "type": "video",
      "videoSrc": "/uber/storybook.mp4"
    },
    {
      "_key": "b983b8922bcc",
      "_type": "mediaAspectRatio",
      "alt": "CMS",
      "aspectRatio": "aspect-ratio-4/3",
      "poster": {
        "_type": "image",
        "asset": {
          "_createdAt": "2020-09-21T18:10:01Z",
          "_id": "image-b8f1ce85e4185d372d8e0853985b2a1ff5e417e5-416x276-png",
          "_rev": "5uq0q6RNKnYRqMeJV1Of7A",
          "_type": "sanity.imageAsset",
          "_updatedAt": "2020-09-21T18:10:01Z",
          "assetId": "b8f1ce85e4185d372d8e0853985b2a1ff5e417e5",
          "extension": "png",
          "metadata": {
            "_type": "sanity.imageMetadata",
            "dimensions": {
              "_type": "sanity.imageDimensions",
              "aspectRatio": 1.5072463768115942,
              "height": 276,
              "width": 416
            },
            "hasAlpha": true,
            "isOpaque": true,
            "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZUlEQVQ4y5VTy07DMBDM//8NvwESPVaoFVwKSAVa/LaTtMuMo7VCKKgcRn6sPTuza3fOO7HW/g/OibFGvPdSSpFxHOV0Osn5fJaOQR4yhDEz2AkzIu4rIccQQiUchqGSVkKHIDMxeAmMLcE7JE0pNXWKLsYoOecKZuv7voGZl+C+R6JPqHUYM8+BdAQZx0pIqErOmZkJ1MYc3As484FyHCyU4k6iGCQjJsIQv9nmnPtURBvzGnFkzNI67zI5nBUoLT0IQwwIWjnaIw44BHMjLmWyrS60DJwznhclIjrjjTy+Pclqt5LNfiMuuVpL2tYO0j5JdK2Euv5BuH3fyu3uTtb7tbjsqs1l93SthCxLutDIzgcvNqLA4SAmGdRheqi/gZeozqIhfD6R1kHcCKdNdDamZuUveB/aO9TmzVV27RdUmKu+HgnDTFkC4QHrZzylqtC56/6zfj0lrI0DIcnuX17l5mEjX2I27zyx2yEzAAAAAElFTkSuQmCC",
            "palette": {
              "_type": "sanity.imagePalette",
              "darkMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#4e7c7d",
                "foreground": "#fff",
                "population": 0.03,
                "title": "#fff"
              },
              "darkVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#309589",
                "foreground": "#fff",
                "population": 0.02,
                "title": "#fff"
              },
              "dominant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#56a85b",
                "foreground": "#fff",
                "population": 0.43,
                "title": "#fff"
              },
              "lightMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#bcbbbb",
                "foreground": "#000",
                "population": 0.3,
                "title": "#fff"
              },
              "lightVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#b7eead",
                "foreground": "#000",
                "population": 0.07,
                "title": "#000"
              },
              "muted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#56a85b",
                "foreground": "#fff",
                "population": 0.43,
                "title": "#fff"
              },
              "vibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#158e90",
                "foreground": "#fff",
                "population": 0.18,
                "title": "#fff"
              }
            }
          },
          "mimeType": "image/png",
          "originalFilename": "timelapseThumbnail_hizrwb.png",
          "path": "images/0eq54p9g/production/b8f1ce85e4185d372d8e0853985b2a1ff5e417e5-416x276.png",
          "sha1hash": "b8f1ce85e4185d372d8e0853985b2a1ff5e417e5",
          "size": 42751,
          "source": {
            "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3RpbWVsYXBzZVRodW1ibmFpbF9oaXpyd2IiLCJyZXNvdXJjZV90eXBlIjoiaW1hZ2UiLCJ0eXBlIjoidXBsb2FkIn0=",
            "name": "cloudinary:morningharwood"
          },
          "uploadId": "wI36mwaVgoCW4bQK5OzeZ0fN73zuqvG1",
          "url": "https://cdn.sanity.io/images/0eq54p9g/production/b8f1ce85e4185d372d8e0853985b2a1ff5e417e5-416x276.png"
        }
      },
      "type": "video",
      "videoSrc": "/uber/timelapse.mp4"
    },
    {
      "_key": "ebfebbacaa5c",
      "_type": "mediaAspectRatio",
      "alt": "Sites",
      "aspectRatio": "aspect-ratio-4/3",
      "poster": {
        "_type": "image",
        "asset": {
          "_createdAt": "2020-09-21T18:10:53Z",
          "_id": "image-08b45b693628db2b68f650d141d27433effe2566-416x276-png",
          "_rev": "DG1NYUnKC3SofcefonUXDJ",
          "_type": "sanity.imageAsset",
          "_updatedAt": "2020-09-21T18:10:53Z",
          "assetId": "08b45b693628db2b68f650d141d27433effe2566",
          "extension": "png",
          "metadata": {
            "_type": "sanity.imageMetadata",
            "dimensions": {
              "_type": "sanity.imageDimensions",
              "aspectRatio": 1.5072463768115942,
              "height": 276,
              "width": 416
            },
            "hasAlpha": true,
            "isOpaque": true,
            "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADbklEQVQ4y4WT6U/TBxjHf//RXizZJhmRsSEisCFXEaUFB8h9yDVuK4igDCHOzSlMM0tcWFeQ9kfLVRCKLVBoKZdyRIVBBdpCD9jLz36aLNu7vfjkOfM8yZPvI2Sd/YicqI/Jjw0iLzaYjIggMs9J/vlg8uNOU5gQQkHCafJkX5KXEkVheiJlBRl8dzWHmuJ0aosUFGXKyEmNISs5AkGvTEC8LkNTI0PdkI2hsw2T5lemxW4sOhUzA93MiE+wiCqmRzTMTuqZt4xjs4xhGfyNEVUT2gdVaLuuIT5uRLB1pDLZdBGxPIHxjhre2MwcHTjxufcIHLn4y+fGu7XKztwouw4TB5sLuN6zbuWd3cDm8A8s9SpZ0DRg72tBECvj6au4QG95ClMPm3m9aGV7e/sDLpebk2M/zoUpZh9ex3yviunOJmY6b2Lvvs1izy2Wf1eyqq5kqadcypUi9JbF86w+A31TAdand1mzT7O+scHW1hZuj4djv483JgMTDemMlX6NIT+S/ivn0JXK0NYpGGvNwNGVy0p3AYuqAoSp5mR09XI05XIm7imZN2pZsVvZ235N4PAA/8EurwxqjBUXeZ4TylRRKBMlX6EvjqInPwa9dPv5O3KW7l/G8UsWwuqPlxiui+NJ2ln6SlIwP77BkvYn3o6qcJrUrA+pGG2rRi0/w0Dip1gKQ3l5KxprQzS6okhGquOwtyax8P0F5tovIWx2pmC7I6M3N5ynaWcYrZU2tqbgaJVLjQoGa5N4dDkcVVwQfTGfYFQEs1AdjuNGBEOlYYxWRmO/nYitJQGz8jzCbFsSVmmgse4b1Nlh9OeGYSwLx1QVwWRtJJrCMLpSQ+iRh6CVncKQ+BlG+SnMVz9nrOILxmsisTXHM3czHtO1WISh9kKMHXmMt+egb/wWsV7BUGMaU+1XsN7Pw9iWhdiYyYgyg+GSZIZy4xnJjuNFRSJzLQrsd7NY+jkfx4Ni5h/VIKzNGHllHmTthZ6V5/04JPEuj2nYNGt5OzvAhllkzSTZyQFWDL0s69S8FNVsDv7B1vgzdqT67qyBnXlJpytmhIDPi997hO/Ig8e1z57zT/adO7j2nbj3333I+Q7d+KW61yOJ3O3G5/kX/6FHegAJ7yEBvxfh5OSEfwgEAvh8Pvx+P37Jfx8Hjo85/k/P//E38Z4ENO9kDqEAAAAASUVORK5CYII=",
            "palette": {
              "_type": "sanity.imagePalette",
              "darkMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#261412",
                "foreground": "#fff",
                "population": 7.77,
                "title": "#fff"
              },
              "darkVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#8e3c29",
                "foreground": "#fff",
                "population": 8.9,
                "title": "#fff"
              },
              "dominant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#8e3c29",
                "foreground": "#fff",
                "population": 8.9,
                "title": "#fff"
              },
              "lightMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#d7c0a7",
                "foreground": "#000",
                "population": 4.78,
                "title": "#fff"
              },
              "lightVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#f8d279",
                "foreground": "#000",
                "population": 0.55,
                "title": "#000"
              },
              "muted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#a67d63",
                "foreground": "#fff",
                "population": 0.94,
                "title": "#fff"
              },
              "vibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#de8b37",
                "foreground": "#000",
                "population": 0.78,
                "title": "#fff"
              }
            }
          },
          "mimeType": "image/png",
          "originalFilename": "e2eThumbnail_jrvug1.png",
          "path": "images/0eq54p9g/production/08b45b693628db2b68f650d141d27433effe2566-416x276.png",
          "sha1hash": "08b45b693628db2b68f650d141d27433effe2566",
          "size": 164542,
          "source": {
            "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL2UyZVRodW1ibmFpbF9qcnZ1ZzEiLCJyZXNvdXJjZV90eXBlIjoiaW1hZ2UiLCJ0eXBlIjoidXBsb2FkIn0=",
            "name": "cloudinary:morningharwood"
          },
          "uploadId": "sKb1iBwM99pFAFCNDe3thgOOEfbVga6m",
          "url": "https://cdn.sanity.io/images/0eq54p9g/production/08b45b693628db2b68f650d141d27433effe2566-416x276.png"
        }
      },
      "type": "video",
      "videoSrc": "/uber/e2e.mp4"
    }
  ],
  "title": "Media Grid One"
};


export const Main = () => {
  return (<MediaGrid {...FIXTURE} />)
};
