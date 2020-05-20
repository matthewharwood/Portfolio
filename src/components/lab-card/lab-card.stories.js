import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {LabCard} from './lab-card';
import Data from '../../_data/sanity.json';
export default {
  title: 'LabCard'
};

export const Main =  () => {
  const props = Data.filter(d => d._type === 'labCard')[1]
  const Component = html`<div style="width: 400px"><${LabCard} ...${props} /></div>`;
  return render(Component);
};


export const Empty =  () => {
  const Component = html`<div style="width: 400px"><${LabCard} /></div>`;
  return render(Component);
};
