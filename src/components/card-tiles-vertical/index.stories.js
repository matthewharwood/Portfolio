import {h} from 'preact';

import {CardTileVertical} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Card Tile Vertical'
};



export const Main = () => {
  const props = seed('cardTilesVertical')
  return (
      <CardTileVertical {...props} />
  )
};