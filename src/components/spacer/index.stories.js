import { h } from 'preact';
import {Spacer} from './';

export default {
  title: 'Spacer'
};
export const Main = () => {
  const props = {
    top: 10,
    bottom: 10
  }
  return (<Spacer {...props}><p>hellow</p></Spacer>)
};
