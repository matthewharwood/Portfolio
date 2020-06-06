import {h} from 'preact';

import {Navigation} from './';

export default {
  title: 'Navigation'
};

const FIXTURE = {
  text: 'Good Morning Harwood'
};

export const Main = () => {
  return (
      <Navigation {...FIXTURE} />
  )
};