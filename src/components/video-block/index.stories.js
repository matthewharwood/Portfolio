import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {VideoBlock} from './';

export default {
  title: 'VideoBlock'
};

const FIXTURE = {
  videoSrc: 'rorschach/rorschach.mp4',
  title: 'title',
  text: 'text text text'
};

export const Main = () => {
  const Component = html`<${VideoBlock} ...${FIXTURE}/>`;
  return render(Component);
};