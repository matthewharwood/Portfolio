import {h} from 'preact';

import {Quote} from './';

export default {
  title: 'Quote'
};

const FIXTURE = {
  hasBorder: true,
  quote: 'This is an awesome quote',
  person: 'person name',
  title: 'Senior software engineer',
  date: 'Dec 2019',
};

export const Main = () => {
  return (
      <Quote {...FIXTURE} />
  )
};