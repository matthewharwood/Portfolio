import {h} from 'preact';

import {Quote} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Quote'
};

export const Main = () => {
  const props = seed('quote');
  return (
      <Quote {...props} />
  )
};