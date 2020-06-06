import {h} from 'preact';
import {Headline} from './';

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
  return (
      <Headline {...FIXTURE} />
  )
};