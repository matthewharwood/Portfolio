import {h} from 'preact';

import {NavigationBar} from './';

export default {
  title: 'Navigation'
};

const FIXTURE = {

};

export const Main = () => {
  return (
      <NavigationBar {...FIXTURE} />
  )
};
