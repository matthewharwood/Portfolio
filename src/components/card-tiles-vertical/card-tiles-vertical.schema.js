
export const cardTilesVertical = {
  name: 'cardTilesVertical',
  title: 'Card Tiles Vertical',
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
