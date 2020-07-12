import {h} from 'preact';
import {PostHeader} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Post Header'
};

const FIXTURE = {
  heading: 'Uber.com Performance',
  description: 'A year long performance audit and refactor of uber.com',
  subtext: 'performance',
  info: [
    {heading: 'Company', values: [{name: 'Uber'}]},
    {heading: 'Collaborators', values: [{name: 'Ryan Wong'}, {name: 'Wasif Zaman'}]},
    {
      heading: 'Technology',
      values: [{name: 'FusionJS'}, {name: 'ReactJS'}, {name: 'Styletron'}, {name: 'Baseweb'}, {name: 'Webpack'}, {name: 'Cloudinary'}]
    }
  ],
};

export const Main = () => {
  const props = seed('postHeader');
  console.log(props);
  return (
      <PostHeader {...props} />
  );
};