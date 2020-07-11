import {h} from 'preact';

import {Highlight} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Highlight'
};
const FIXTURE = {
  title: 'Steps',
  text: 'hello',
  image: 'sample.jpg'
};

export const Main = () => {
  const props = seed('highlight');
  return (
      <Highlight {...props} />
  )
};