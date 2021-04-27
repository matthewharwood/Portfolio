import omit from 'just-omit';

const IMAGE_FIXTURE = {
  altText: 'hello world',
  lgAspectRatio: 'lg:aspect-ratio-16/9',
  defaultAspectRatio: 'aspect-ratio-4/5',
  defaultSrc: {
    "_type": "image",
    "asset": {
      "_createdAt": "2020-09-21T18:09:08Z",
      "_id": "image-758b92c1bcfcbaae9f57b496abb22b102fcd78b2-416x276-png",
      "_rev": "5uq0q6RNKnYRqMeJV1Ocpa",
      "_type": "sanity.imageAsset",
      "assetId": "758b92c1bcfcbaae9f57b496abb22b102fcd78b2",
      "source": {
        "id": "eyJwdWJsaWNfaWQiOiJiZWFyLW1vYmlsZV9maHcyc3YifQ==",
        "name": "cloudinary:morningharwood"
      },
      "extension": "png",
    },
  },
  lgSrc: {
    "_type": "image",
    "asset": {
      "_createdAt": "2020-09-21T18:09:08Z",
      "_id": "image-758b92c1bcfcbaae9f57b496abb22b102fcd78b2-416x276-png",
      "_rev": "5uq0q6RNKnYRqMeJV1Ocpa",
      "_type": "sanity.imageAsset",
      "source": {
        "id": "eyJwdWJsaWNfaWQiOiJiZWFyLWRlc2tvcF9nbTBnbXYifQ==",
        "name": "cloudinary:morningharwood"
      },
      "assetId": "758b92c1bcfcbaae9f57b496abb22b102fcd78b2",
      "extension": "png",
    },
  },
};

export const fixtures = {
  MainAspectRatio: IMAGE_FIXTURE,
  MainNoAspectRatio: {...omit(IMAGE_FIXTURE, 'lgAspectRatio', 'defaultAspectRatio')}
}
