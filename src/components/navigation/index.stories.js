

import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {Navigation} from './';

export default {
  title: 'Navigation'
};

const FIXTURE = {
  text: 'Good Morning Harwood'
};

export const Main = () => {
  const Component = html`<${Navigation} ...${FIXTURE}/>`;
  return render(Component);
};