import {h} from 'preact';
import {TextOverShape} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Text Over Shape'
};


export const Main = () => {
  const props = seed('textOverShape');
  console.log(props);
  return (
    <TextOverShape {...props} />
  )
};
