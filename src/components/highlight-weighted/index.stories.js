import {h} from 'preact';
import {HighlightWeighted} from './index';

export default {
  title: 'Highlight Weighted'
};

const FIXTURE = {};

export const Main = () => {
  return (<HighlightWeighted {...FIXTURE} />)
};
