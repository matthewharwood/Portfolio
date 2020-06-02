import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {Outline} from './';

export default {
  title: 'Outline'
};
const FIXTURE = {
  title: 'Steps',
  steps: [
    {text: 'hello'},
    {text: 'world'}
  ]
};

export const Main = () => {
  const Component = html`<${Outline} ...${FIXTURE}/>`;
  return render(Component);
};

// export const Empty = () => {
//   const Component = html`<${Outline} />`;
//   return render(Component);
// };
