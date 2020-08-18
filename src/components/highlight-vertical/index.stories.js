import {h} from 'preact';

import {HighlightVertical} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Highlight Vertical'
};
const FIXTURE = {
  title: 'Steps',
  text: 'hello',
  image: 'sample.jpg'
};

export const Main = () => {
  const props = seed('highlight');
  return (
      <HighlightVertical {...props} />
  )
};
