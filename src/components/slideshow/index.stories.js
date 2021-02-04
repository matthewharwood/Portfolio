import {h} from 'preact';
import {Slideshow} from './';



export default {
  title: 'Slideshow'
};
const FIXTURE = {
  "images": [{
    "imgSrc": {
      "_type": "image",
      "asset": {
        "source": {
          "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3dvcmxkXzJfa293dml1IiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
          "name": "cloudinary:morningharwood"
        },
      }
    },
  }, {
    "imgSrc": {
      "_type": "image",
      "asset": {
        "source": {
          "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3dvcmxkXzJfa293dml1IiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
          "name": "cloudinary:morningharwood"
        },
      }
    },
  },{
    "imgSrc": {
      "_type": "image",
      "asset": {
        "source": {
          "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3dvcmxkXzJfa293dml1IiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
          "name": "cloudinary:morningharwood"
        },
      }
    },
  },{
    "imgSrc": {
      "_type": "image",
      "asset": {
        "source": {
          "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3dvcmxkXzJfa293dml1IiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
          "name": "cloudinary:morningharwood"
        },
      }
    },
  },{
    "imgSrc": {
      "_type": "image",
      "asset": {
        "source": {
          "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3dvcmxkXzJfa293dml1IiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
          "name": "cloudinary:morningharwood"
        },
      }
    },
  },{
    "imgSrc": {
      "_type": "image",
      "asset": {
        "source": {
          "id": "eyJwdWJsaWNfaWQiOiJ1YmVyL3dvcmxkXzJfa293dml1IiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
          "name": "cloudinary:morningharwood"
        },
      }
    },
  }]

};

export const Main = () => {

  return (<Slideshow {...FIXTURE} />)
};
