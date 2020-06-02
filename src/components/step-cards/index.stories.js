import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {Summary} from './';

export default {
  title: 'Summary'
};
const FIXTURE = {
  title: 'Steps',
  number: 0,
  heading: 'this is a heading',
  text: 'lorem ipsum'
};

export const Main = () => {
  const Component = html`<${Summary} ...${FIXTURE}/>`;
  return render(Component);
};