import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {Polymorph} from './';

export default {
  title: 'Polymorph'
};

const FIXTURE = {
};

export const Main = () => {
  const Component = html`<${Polymorph} ...${FIXTURE}/>`;
  return render(Component);
};