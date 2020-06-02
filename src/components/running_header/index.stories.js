import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {Quote} from './';

export default {
  title: 'Quote'
};

const FIXTURE = {
  hasBorder: true,
  quote: 'This is an awesome quote',
  person: 'person name',
  title: 'Senior software engineer',
  date: 'Dec 2019',
};

export const Main = () => {
  const Component = html`<${Quote} ...${FIXTURE}/>`;
  return render(Component);
};