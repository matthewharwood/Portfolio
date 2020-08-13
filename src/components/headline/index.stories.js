import {h} from 'preact';
import {Headline} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Headline'
};

const FIXTURE = {
  hasBackground: false,
  hasBorder: false,
  title: 'hello world',
  text: 'text text text'
}

export const Main = () => {
  const props = seed('headline');
  return (
      <Headline {...props} />
  )
};
