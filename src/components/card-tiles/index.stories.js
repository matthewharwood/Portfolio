import {h} from 'preact';
import {CardTiles} from './';
import Data from '../../_data/sanity.json';

export default {
  title: 'Card Tiles'
};


export const Main = () => {
  const props = Data.filter(d => d._type === 'cardTiles')[0];
  console.log(props);
  return (
      <CardTiles {...props} />
  )
};