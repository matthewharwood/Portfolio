import {h} from 'preact';
import {PostPagination} from './';

export default {
  title: 'Post Pagination'
};

const FIXTURE = {
  heading: 'hello world',
  description: 'description text',
  subtext: 'subtext text',
  info: [{heading: 'heading', text: 'text'}],
};

export const Main = () => {
  return (
      <PostPagination {...FIXTURE} />
  )
};