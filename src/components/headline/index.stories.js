import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {Headline} from './';

export default {
  title: 'Headline'
};

const FIXTURE = {
  hasBackground: false,
  hasBorder: false,
  title: 'hello world',
  text: 'text text text'
}

export const Main = () => {
  const Component = html`<${Headline} ...${FIXTURE}/>`;
  return render(Component);
};