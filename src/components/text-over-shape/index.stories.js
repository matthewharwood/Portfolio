import {h} from 'preact';
import {TextOverShape} from './';

export default {
  title: 'Text Over Shape'
};

const props = {
  title: 'TextOverShape'
}
export const Main = () => {

  return (
    <TextOverShape {...props} />
  )
};
