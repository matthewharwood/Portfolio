import {h} from 'preact';

import {Highlight} from './';

export default {
  title: 'Highlight'
};
const FIXTURE = {
  title: 'Steps',
  text: 'hello',
  image: 'sample.jpg'
};

export const Main = () => {
  return (
      <Highlight {...FIXTURE} />
  )
};