import {h} from 'preact';
import {CategoryCards} from './';

export default {
  title: 'Category Cards'
};

export const Main = () => {
  const props = {}
  return (
      <CategoryCards {...props} />
  )
};
