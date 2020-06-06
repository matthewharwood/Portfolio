import {h} from 'preact';

import {HighlightBold} from './';
import Data from '../../_data/sanity.json';

export default {
  title: 'Highlight Bold'
};

const FIXTURE = {
  title: 'Steps',
  text: 'hello',
  image: 'sample.jpg',
  subtitle: 'hello subtitle'
};

export const Main = () => {
  const props = Data.filter(d => d._type === 'highlightBold')[0];
  return (
      <HighlightBold {...props} />
  )
};