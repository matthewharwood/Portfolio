import {h} from 'preact';
import {MediaGridArea} from './index';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Media Grid Area'
};

const FIXTURE = {};

export const Main = () => {
  const props = seed('mediaGridArea');
  return (<MediaGridArea {...FIXTURE} {...props} />)
};
