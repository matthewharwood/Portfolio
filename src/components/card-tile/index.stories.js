import {h} from 'preact';

import {CardTile} from './';
import {CardTiles} from '../card-tiles';

export default {
  title: 'Card Tile'
};

const FIXTURE = {
  cards: [
    {
      image: 'rorschach/r-1.jpg',
      title: 'title',
      subtitle: 'text text text'
    },
    {
      image: 'rorschach/r-1.jpg',
      title: 'title',
      subtitle: 'text text text'
    },
    {
      image: 'rorschach/r-1.jpg',
      title: 'title',
      subtitle: 'text text text'
    }
  ]
}

export const Main = () => {
  return (
      <CardTiles {...FIXTURE} />
  )
};