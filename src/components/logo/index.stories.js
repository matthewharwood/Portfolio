

import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {Logo} from './';

export default {
  title: 'Logo'
};

const FIXTURE = {
  text: 'Good Morning Harwood'
};

export const Main = () => {
  const Component = html`<${Logo} ...${FIXTURE}/>`;
  return render(Component);
};