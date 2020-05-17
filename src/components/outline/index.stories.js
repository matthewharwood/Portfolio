import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {Outline} from './';

export default {
  title: 'outline'
};

export const Main = () => {
  const Component = html`<${Outline}/>`;
  return render(Component);
};
