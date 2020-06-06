import {h} from 'preact';

import {Outline} from './';

export default {
  title: 'Outline'
};
const FIXTURE = {
  title: 'Steps',
  steps: [
    {text: 'hello'},
    {text: 'world'}
  ]
};

export const Main = () => {
  return (
      <Outline {...FIXTURE} />
  )
};

