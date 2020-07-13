import {h} from 'preact';
import {HighlightVideo} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Highlight Video'
};

const FIXTURE = {
  videoSrc: 'rorschach/rorschach.mp4',
  title: 'title',
  text: 'text text text'
};

export const Main = () => {
  const props = seed('video');
  return (<HighlightVideo {...props} />)
};