import {h} from 'preact';
import {HR} from './';

export default {
  title: 'Horizontal Rule'
};

const FIXTURE = {
  title: 'Im a title',
};

export const Main = () => {
  return (<div className="mt-10"><HR {...FIXTURE} /></div>)
};
