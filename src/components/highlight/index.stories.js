// isImageRight,
//     imageCols = 6,
//     subtitle,
//     title,
//     text,
//     image,


import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {Highlight} from './';

export default {
  title: 'Highlight'
};
const FIXTURE = {
  title: 'Steps',
  text: 'hello',
  image: 'sample.jpg'
};

export const Main = () => {
  const Component = html`<${Highlight} ...${FIXTURE}/>`;
  return render(Component);
};