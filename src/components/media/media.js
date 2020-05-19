import {isVideo, Video} from './video';
import {html} from 'htm/preact';
import {useStatic} from '../../hooks/use_static';

const Media = ({src = 'sample.jpg', alt = '', classNames = ''}) => {
  return isVideo(src)
      ? html`<${Video} className="${classNames}" src=${src} />`
      : html`<img className="${classNames}" src="${useStatic(src)}" alt="${alt}" />`;
};

export {Media};