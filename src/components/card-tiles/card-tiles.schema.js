export const cardTile = {
  name: 'cardTile',
  title: 'Card Tile',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'src',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text'
    }
  ]
};

export const cardTiles = {
  name: 'cardTiles',
  title: 'Card Tiles',
  type: 'document',
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {type: 'cardTile'}
      ],
    },
  ]
}
