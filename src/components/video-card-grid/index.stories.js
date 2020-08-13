import {h} from 'preact';
import {VideoCardGrid} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Video Card Grid'
};


export const Main = () => {
  const FIXTURE = seed('videoCardGrid');
  return (<VideoCardGrid {...FIXTURE} />)
};
