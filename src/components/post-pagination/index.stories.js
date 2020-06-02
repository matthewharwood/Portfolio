import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {PostHeader} from './';

export default {
  title: 'Post Header'
};

const FIXTURE = {
  heading: 'hello world',
  description: 'description text',
  subtext: 'subtext text',
  info: [{heading: 'heading', text: 'text'}],
};

export const Main = () => {
  const Component = html`<${PostHeader} ...${FIXTURE}/>`;
  return render(Component);
};