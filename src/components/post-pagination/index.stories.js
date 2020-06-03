import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {PostPagination} from './';

export default {
  title: 'Post Pagination'
};

const FIXTURE = {
  heading: 'hello world',
  description: 'description text',
  subtext: 'subtext text',
  info: [{heading: 'heading', text: 'text'}],
};

export const Main = () => {
  const Component = html`<${PostPagination} ...${FIXTURE}/>`;
  return render(Component);
};