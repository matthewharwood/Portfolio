import {h} from 'preact';

import {Summary} from './';

export default {
  title: 'Summary'
};

const FIXTURE = {
  title: 'Steps',
  number: 0,
  heading: 'this is a heading',
  text: 'lorem ipsum',
  videos: [
    {poster: 'sample.jpg', title: 'hello title'}
  ]
};

export const Main = () => {


  return (<Summary {...FIXTURE} />)
};