import {h} from 'preact';
import {VideoCard} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Video Card'
};


export const Main = () => {
  const FIXTURE = seed('videoCard');
  return (<VideoCard {...FIXTURE} />)
};
