import {h} from 'preact';
import {InfiniteImageScroll} from './';

export default {
  title: 'Infinite Image Scroll'
};

const FIXTURE = {
  hasBackground: false,
  hasBorder: false,
  title: 'hello world',
  text: 'text text text'
}

export const Main = () => {
  return (
    <InfiniteImageScroll />
  )
};
