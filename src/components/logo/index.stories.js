import {h} from 'preact';
import {Logo} from './';

export default {
  title: 'Logo'
};

const FIXTURE = {
  text: 'Good Morning Harwood'
};

export const Main = () => {
  return (
      <Logo {...FIXTURE} />
  )
};