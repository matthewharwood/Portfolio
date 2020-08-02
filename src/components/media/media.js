import {Video} from './video';
import {html} from 'htm/preact';
import {useStatic} from '../../hooks/use_static';
import {decode} from 'universal-base64';

const Media = ({src, alt = '', classNames = '', video}) => {
  return video
      ? html`<${Video} src="${video}" className="${classNames}"  />`
      : html`<${Image} src=${src} className="${classNames}"/>`
};

const Image = ({src, alt = '', className = ''}) => {
  const id = src && src.asset && src.asset.source && src.asset.source.id;
  const atobSrc = JSON.parse(decode(id)).public_id + '.jpg';

  return html`<img className="${className}" src="${useStatic(atobSrc)}" alt="${alt}" />`;
};
export {Media, Image};
