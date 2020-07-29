import {h} from 'preact';
import {SummaryVideoGrid} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Summary Video Grid'
};


export const Main = () => {
  const FIXTURE = seed('summaryVideoGrid');
  console.log('helllooooooooooooooooooooooooooooooooooo');
  return (<SummaryVideoGrid {...FIXTURE} />)
};
