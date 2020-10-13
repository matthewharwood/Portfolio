import {h} from 'preact';
import {ButtonsGrid} from './index';

export default {
  title: 'Buttons Grid'
};

const FIXTURE = {
  buttons: [
    {},
    {},
  ]
};

export const Main = () => {
  return (<ButtonsGrid {...FIXTURE} />)
};
