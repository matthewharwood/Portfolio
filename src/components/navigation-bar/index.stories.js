import {h} from 'preact';

import {NavigationBar} from './';

export default {
  title: 'Navigation Bar'
};

const FIXTURE = {

};

export const Main = () => {
  return (
      <NavigationBar {...FIXTURE} />
  )
};
