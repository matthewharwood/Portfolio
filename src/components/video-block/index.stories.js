import {h} from 'preact';
import {VideoBlock} from './';

export default {
  title: 'VideoBlock'
};

const FIXTURE = {
  videoSrc: 'rorschach/rorschach.mp4',
  title: 'title',
  text: 'text text text'
};

export const Main = () => {
  return (<VideoBlock {...FIXTURE} />)
};