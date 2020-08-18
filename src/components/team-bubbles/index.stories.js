import {h} from 'preact';
import {TeamBubbles} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Team Bubbles'
};

export const Main = () => {
  const props = seed('teamBubbles');
  return (<TeamBubbles {...props} />)
};
