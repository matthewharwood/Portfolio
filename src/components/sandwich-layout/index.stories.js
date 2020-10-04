import {h} from 'preact';
import {SandWichLayout} from './';

export default {
  title: 'Sandwich Layout'
};

const FIXTURE = {
  "_key": "f3540ff791bf",
  "_type": "sandwichLayout",
  "leftMedia": {
    "_createdAt": "2020-08-31T23:23:34Z",
    "_id": "9b7c3c02-43dc-43d8-85aa-6d4eea23e524",
    "_rev": "RaV9g1UeS1tVjto6tcMf5j",
    "_type": "media",
    "_updatedAt": "2020-08-31T23:23:34Z",
    "alt": "World Left",
    "imgSrc": {
      "_type": "image",
      "asset": {
        "_createdAt": "2020-08-31T23:23:31Z",
        "_id": "image-c7aed96c606ceebe9d91a2f6f8fbd78dea1e20a9-858x1438-png",
        "_rev": "PYtyB8onJmnyJVbdcGTFUV",
        "_type": "sanity.imageAsset",
        "_updatedAt": "2020-08-31T23:23:31Z",
        "assetId": "c7aed96c606ceebe9d91a2f6f8fbd78dea1e20a9",
        "extension": "png",
        "metadata": {
          "_type": "sanity.imageMetadata",
          "dimensions": {
            "_type": "sanity.imageDimensions",
            "aspectRatio": 0.5966620305980529,
            "height": 1438,
            "width": 858
          },
          "hasAlpha": true,
          "isOpaque": false,
          "lqip": "data:image/png;base64,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",
          "palette": {
            "_type": "sanity.imagePalette",
            "darkMuted": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#2c2844",
              "foreground": "#fff",
              "population": 0.01,
              "title": "#fff"
            },
            "darkVibrant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#4d2725",
              "foreground": "#fff",
              "population": 0.02,
              "title": "#fff"
            },
            "dominant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#c7baa6",
              "foreground": "#000",
              "population": 2.49,
              "title": "#fff"
            },
            "lightMuted": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#c7baa6",
              "foreground": "#000",
              "population": 2.49,
              "title": "#fff"
            },
            "lightVibrant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#91abea",
              "foreground": "#000",
              "population": 0.47,
              "title": "#fff"
            },
            "muted": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#a18658",
              "foreground": "#fff",
              "population": 0.57,
              "title": "#fff"
            },
            "vibrant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#a2d658",
              "foreground": "#000",
              "population": 0.01,
              "title": "#fff"
            }
          }
        },
        "mimeType": "image/png",
        "originalFilename": "world_2_kowviu.png",
        "path": "images/0eq54p9g/production/c7aed96c606ceebe9d91a2f6f8fbd78dea1e20a9-858x1438.png",
        "sha1hash": "c7aed96c606ceebe9d91a2f6f8fbd78dea1e20a9",
        "size": 485209,
        "source": {
          "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3dvcmxkXzJfa293dml1IiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
          "name": "cloudinary:morningharwood"
        },
        "uploadId": "rhRviH37mYQ4Nknum8rTWeZypLZMVst5",
        "url": "https://cdn.sanity.io/images/0eq54p9g/production/c7aed96c606ceebe9d91a2f6f8fbd78dea1e20a9-858x1438.png"
      }
    },
    "type": "image"
  },
  "mobileMedia": {
    "_createdAt": "2020-08-31T23:26:57Z",
    "_id": "74b4c538-1e38-4895-b7b1-27e6693a3e9e",
    "_rev": "RaV9g1UeS1tVjto6tcMjuY",
    "_type": "media",
    "_updatedAt": "2020-08-31T23:26:57Z",
    "alt": "World Center",
    "imgSrc": {
      "_type": "image",
      "asset": {
        "_createdAt": "2020-08-31T23:26:55Z",
        "_id": "image-58bb8eab15c3495bee10c4666ad8fd2ce2ee6a29-379x379-png",
        "_rev": "PYtyB8onJmnyJVbdcGTJcc",
        "_type": "sanity.imageAsset",
        "_updatedAt": "2020-08-31T23:26:55Z",
        "assetId": "58bb8eab15c3495bee10c4666ad8fd2ce2ee6a29",
        "extension": "png",
        "metadata": {
          "_type": "sanity.imageMetadata",
          "dimensions": {
            "_type": "sanity.imageDimensions",
            "aspectRatio": 1,
            "height": 379,
            "width": 379
          },
          "hasAlpha": true,
          "isOpaque": false,
          "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFwElEQVQ4yyVUW2wbaRX+iwq7sAKxL6zEAzfBCxJCK/HCCsQjq5V4ASEe2EVC4mURq31ACOjS7LZJ01zq5uYkdhqP47s9juO7E4/t8d2e2GPPjMcez9iJL0lzabLtklIJiNpzcMP3cs7L+fSdT+d8hIzQdc6RpitM/lpB8uFfaBK79cmr+Ttj36xOjf2Mnb39+625qb+HFqc/Yo1T72eomZ9HjRPfdc3efC09OX/t5bx56j0SuTdFrtA3T5LIrTtXvTTx4XV+UfcNTq//VXlp/l55eSaSME7ztH5aDejuaTsLM+KW4RZDLd/Qr+huvGecHfuex6B7BZ8iCZj/TIKGCUKqRgMpISHNQOCV6rr+hxXjwo2axZLnXfRZ3kb9N7Y+D37jAiZNNsxZHBCl5i4dxvEn1OrtqnX99lTAMf5W2jXxpZeCctEFQv4YQtJcn/18zWx9M2+iZjMmg7ZL05dSPIdcdAdZlx2ynk2oxnLAh1koOGyYsKxgyL78PLq5eMD67hky1om3wjN/exVRJeTm2J+IaF79VoWixpLrVDdEmV4wbhoKsRRko3HI+SPAxzIgxjNQomnImo2Qs1KQ9jihGPJCNWQ9KNnmdYnFm98PfPLuNSJZDV+sW6hfl+0bhYhz7dJiX0KzwwhW2g5Wiw1DD6yw6/IBv+WFlH0FouvTuGNehqTLCVwkAmIs9LziNUtFy/0/VO33v0LkTdN3ONfGfMpDnfsiS2hkpmAxOgMLtB6Nqw/Af38F84ZFZJ1LuOXRIW2+DfTKHfCbViEf8IPAplBgYhdShKakwMYPSD609nYmZGNSYftlLEmhtzAPjsQ0ujdHapw+zNm3sOS2YDJgQV9wDb3uu+imboHzwTRGXRYoszkUCtxzmWVK4rbrtyQeWP4gH3M1eDaO9XweKtkwlBgXVJgdFDMyNjKtUa1hvShjMVfEeMyKWz4d2hx3wOGYg3DEBTk2iDU2st/Mbk+SjGdlvBrd3GvmStjmVFBLCrS5NmjCEXYa/0RV/Azb9U9REZ9gs36MXJbDkM+CG/a7YHLPgC+qh3zahFIhdNKplk2k6rXdFZh4r1msocJ1QOUPoSM/gU7rKWryZ9hpPcN24wIFbohisYM8W8dtjxfd9lX0xx1QrgZf9JQI9hX2tNMom4kQDN6Q2LLaLCrYKnVB4QagCueg1E9Q5vawVT1EiTtALikgn+KxkRWwMrrRMpsFSZJg0FPh8YmKZ0fysKfV5ogUZt5tZcVdheu/aFUOR4SH0No9AqmwD/VUA4WkiGK6hUKui01+ZIN8NrLhADTxEPaVE+hph/CwP4Tz4VA41frvk0Ys9aNWXnQ2K3vP5JFvjcopiOnB6DMasBvhgY/XsJHXUK2djdb/F3a1Z9BtPYZu41PsiI9gTxrgsNX/96P2Q/9j8dFPiBSPv15LVD4oJeV2kdVeFOI9SPsVYGkOma0sJJgCFMsytoRj7AinoNaOoV07RVV4BB3xGHrSEIfSYHAsH3z0RDh+gzyM05/bofk3vS55bdOpnPttCrrNdbBvlMHiycPGdgY2C2UoVtvA76pQyKmQzgyB446hJR1iV+hd7Nf3PQfy4KdPj46uX8WWab312vJ6+53VNdVnNLQf65dl0OtlXKcaYPZy4AxlgdkuQiJWApe/CpaAhkx+iHJj8EyTtIQmKL/pKXtfRRzF1uTqHmGYKtE9aL8+u9L9xczynnXSoPV1lPIfm72BQWcJY2sMFvQxLKxuo3ctiU6au8wWlFOt2Y3uK9rv2nLjjQ5fuzbgDgiZX+uRhxMycdEamdWffPmu4fDH4w7tH1PhWswYL2s+f/Ysadi54OaCF7tLwfMEFd9LhkussCvO9Butdw6aytdURbtK7r6q/j+1FxwdomcK5KXkte2j67oC/3Vdofz2crL6sTvEe5OebDbtjmXj9I6PCZYmuVzzl6qofXuwy38hNe4gIt8hvWbniut/sWtw7OPnJmMAAAAASUVORK5CYII=",
          "palette": {
            "_type": "sanity.imagePalette",
            "darkMuted": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#3a344d",
              "foreground": "#fff",
              "population": 0.02,
              "title": "#fff"
            },
            "darkVibrant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#140505",
              "foreground": "#fff",
              "population": 0.19,
              "title": "#fff"
            },
            "dominant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#aa7983",
              "foreground": "#fff",
              "population": 5.04,
              "title": "#fff"
            },
            "lightMuted": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#cfbda6",
              "foreground": "#000",
              "population": 4.61,
              "title": "#fff"
            },
            "lightVibrant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#e7a981",
              "foreground": "#000",
              "population": 0.88,
              "title": "#fff"
            },
            "muted": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#aa7983",
              "foreground": "#fff",
              "population": 5.04,
              "title": "#fff"
            },
            "vibrant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#49dca6",
              "foreground": "#000",
              "population": 0,
              "title": "#fff"
            }
          }
        },
        "mimeType": "image/png",
        "originalFilename": "world-mobile_idw8wt.png",
        "path": "images/0eq54p9g/production/58bb8eab15c3495bee10c4666ad8fd2ce2ee6a29-379x379.png",
        "sha1hash": "58bb8eab15c3495bee10c4666ad8fd2ce2ee6a29",
        "size": 264860,
        "source": {
          "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3dvcmxkLW1vYmlsZV9pZHc4d3QiLCJyZXNvdXJjZV90eXBlIjoiaW1hZ2UiLCJ0eXBlIjoidXBsb2FkIn0=",
          "name": "cloudinary:morningharwood"
        },
        "uploadId": "5dqgIA7uo68AaHmq41KyDkx75PApmFz6",
        "url": "https://cdn.sanity.io/images/0eq54p9g/production/58bb8eab15c3495bee10c4666ad8fd2ce2ee6a29-379x379.png"
      }
    },
    "type": "image"
  },
  "rightMedia": {
    "_createdAt": "2020-08-31T23:26:35Z",
    "_id": "d78c9884-fef8-4b89-bed5-28a8e08b5f83",
    "_rev": "RaV9g1UeS1tVjto6tcMjSp",
    "_type": "media",
    "_updatedAt": "2020-08-31T23:26:35Z",
    "alt": "World Right",
    "imgSrc": {
      "_type": "image",
      "asset": {
        "_createdAt": "2020-08-31T23:26:33Z",
        "_id": "image-4d1175214a09176cea8f59724113d992c77f6d80-858x1438-png",
        "_rev": "RaV9g1UeS1tVjto6tcMjPk",
        "_type": "sanity.imageAsset",
        "_updatedAt": "2020-08-31T23:26:33Z",
        "assetId": "4d1175214a09176cea8f59724113d992c77f6d80",
        "extension": "png",
        "metadata": {
          "_type": "sanity.imageMetadata",
          "dimensions": {
            "_type": "sanity.imageDimensions",
            "aspectRatio": 0.5966620305980529,
            "height": 1438,
            "width": 858
          },
          "hasAlpha": true,
          "isOpaque": false,
          "lqip": "data:image/png;base64,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",
          "palette": {
            "_type": "sanity.imagePalette",
            "darkMuted": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#3c463e",
              "foreground": "#fff",
              "population": 0.02,
              "title": "#fff"
            },
            "darkVibrant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#4a1e28",
              "foreground": "#fff",
              "population": 0.02,
              "title": "#fff"
            },
            "dominant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#c79aae",
              "foreground": "#000",
              "population": 2.68,
              "title": "#fff"
            },
            "lightMuted": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#c79aae",
              "foreground": "#000",
              "population": 2.68,
              "title": "#fff"
            },
            "lightVibrant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#94abea",
              "foreground": "#000",
              "population": 0.4,
              "title": "#fff"
            },
            "muted": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#9f8458",
              "foreground": "#fff",
              "population": 0.5,
              "title": "#fff"
            },
            "vibrant": {
              "_type": "sanity.imagePaletteSwatch",
              "background": "#94cc54",
              "foreground": "#000",
              "population": 0,
              "title": "#fff"
            }
          }
        },
        "mimeType": "image/png",
        "originalFilename": "world_1_qalatc.png",
        "path": "images/0eq54p9g/production/4d1175214a09176cea8f59724113d992c77f6d80-858x1438.png",
        "sha1hash": "4d1175214a09176cea8f59724113d992c77f6d80",
        "size": 484682,
        "source": {
          "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3dvcmxkXzFfcWFsYXRjIiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
          "name": "cloudinary:morningharwood"
        },
        "uploadId": "HQIxceAcNLUta2b3VRaYHpw40YjioH7J",
        "url": "https://cdn.sanity.io/images/0eq54p9g/production/4d1175214a09176cea8f59724113d992c77f6d80-858x1438.png"
      }
    },
    "type": "image"
  }
};

export const Main = () => {

  return (<SandWichLayout {...FIXTURE} />)
};
