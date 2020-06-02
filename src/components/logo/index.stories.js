

import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {HighlightBold} from './';

export default {
  title: 'Highlight Bold'
};

const FIXTURE = {
  title: 'Steps',
  text: 'hello',
  image: 'sample.jpg',
  subtitle: 'hello subtitle'
};

export const Main = () => {
  const Component = html`<${HighlightBold} ...${FIXTURE}/>`;
  return render(Component);
};