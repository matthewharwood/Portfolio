import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {SummaryCard} from './';

export default {
  title: 'SummaryCard'
};
const FIXTURE = {
  title: 'Steps',
  steps: [
    {text: 'hello'},
    {text: 'world'}
  ]
};

export const Main = () => {
  const Component = html`<${SummaryCard} ...${FIXTURE}/>`;
  return render(Component);
};