import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {PostFooter} from './';

export default {
  title: 'Post Footer'
};

const FIXTURE = {
};

export const Main = () => {
  const Component = html`<${PostFooter} ...${FIXTURE}/>`;
  return render(Component);
};