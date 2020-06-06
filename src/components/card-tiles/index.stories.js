import {h} from 'preact';
import {CardTiles} from './';

export default {
  title: 'Card Tiles'
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