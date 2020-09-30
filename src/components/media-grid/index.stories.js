import {h} from 'preact';
import {MediaGrid} from './';

export default {
  title: 'Media Grid'
};

const FIXTURE = {};

export const Main = () => {
  return (<MediaGrid {...props} />)
};
