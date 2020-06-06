import {h} from 'preact';

import {LabCard} from './lab-card';
import Data from '../../_data/sanity.json';
export default {
  title: 'LabCard'
};

export const Main =  () => {
  const props = Data.filter(d => d._type === 'labCard')[0]
  console.log(props);
  return (
      <div style={{width: '400px'}}><LabCard {...props} /></div>
  )
};
