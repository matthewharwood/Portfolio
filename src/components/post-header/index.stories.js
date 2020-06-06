import {h} from 'preact';

import {PostHeader} from './';

export default {
  title: 'Post Header'
};

const FIXTURE = {
  heading: 'hello world',
  description: 'description text',
  subtext: 'subtext text',
  info: [{heading: 'heading', text: 'text'}],
};

export const Main = () => {
  return (
      <PostHeader {...FIXTURE} />
  )
};