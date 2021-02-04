import {Video} from './video';
import {html} from 'htm/preact';
import {useStatic} from '../../hooks/use_static';
import {decode} from 'universal-base64';

const Media = ({src, alt = '', classNames = '', video}) => {
  return video
      ? html`<${Video} src="${video}" className="${classNames}"  />`
      : html`<${Image} src="${src}" className="${classNames}"/>`
};

const MediaNew = ({ type, imgSrc, videoSrc, alt, poster,className, extension = '.jpg' }) => {
  const commonProps = {
    alt,
    className,
  }
  return type === 'video' ?  html`<${Video} src="${videoSrc}" poster="${poster}" ...${commonProps}/>` : html`<${Image} src="${imgSrc}" extension="${extension}"  ...${commonProps}/>`
}

const Image = ({src, alt = '', className = '', flags = '', extension='.jpg'}) => {
  const id = src && src.asset && src.asset.source && src.asset.source.id;
  const decodedId = id ? JSON.parse(decode(id)).public_id : '';
  const atobSrc = decodedId + extension;
  return html`<img className="${className}" src="${useStatic(atobSrc, flags)}" alt="${alt}" />`;
};

export {Media, MediaNew, Image};
