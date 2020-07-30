import {h} from 'preact';
import {Summary} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Summary'
};

export const Main = () => {
  const FIXTURES =  seed('summary');
  console.log(FIXTURES);
  return (<Summary {...FIXTURES} />)
};
