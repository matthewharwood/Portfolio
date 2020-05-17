import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {NavigationBar} from './';

export default {
  title: 'Navigation'
};

export const Main = () => {
  const Component = html`<${NavigationBar}/>`;
  return render(Component);
};
