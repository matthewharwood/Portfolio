import {Video} from './video';
import {html} from 'htm/preact';
import {useStatic} from '../../hooks/use_static';
import {decode} from 'universal-base64';

const Media = ({src, alt = '', classNames = '', video}) => {
  return video
      ? html`<${Video} src="${video}" className="${classNames}"  />`
      : html`<${Image} src="${src}" className="${classNames}"/>`
};

const MediaNew = (props) => {
  const { type, imgSrc, imgSrcMobile, videoSrc, videoSrcMobile, alt, poster,className, extension = '.jpg' } = props;

  const commonProps = {
    alt,
    className,
  }

  return type === 'video'
    ?  html`<${Video} loop="${props.loop}" src="${videoSrc}" srcMobile="${videoSrcMobile}" poster="${poster}" ...${commonProps}/>`
    : html`<${Image} src="${imgSrc}" srcMobile="${imgSrcMobile}" extension="${extension}"  ...${commonProps}/>`
}

const Image = ({src, alt = '', className = '', flags = '',srcMobile,  extension='.jpg'}) => {
  const id = src && src.asset && src.asset.source && src.asset.source.id;
  const decodedId = id ? JSON.parse(decode(id)).public_id : '';
  const atobSrc = decodedId + extension;

  const MobileTemplate = () => {
    const idMobile = srcMobile && srcMobile.asset && srcMobile.asset.source && srcMobile.asset.source.id;
    const decodedIdMobile = id ? JSON.parse(decode(idMobile)).public_id : '';
    const atobSrcMobile = decodedIdMobile + extension;

    return html`
      <div className="${className}">
        <picture >
          <source media="(min-width:1024px)" srcset="${useStatic(atobSrc, flags)}" />
          <img src="${useStatic(atobSrcMobile, flags)}" alt="${alt}" />
        </picture>
      </div>
   `;
  }

  const DefaultTemplate = () => {
    return html`
      <img className="${className}" src="${useStatic(atobSrc, flags)}" alt="${alt}" />
    `;
  }

  if(srcMobile) {
    return html`<${MobileTemplate} />`
  }
  return html`<${DefaultTemplate} />`
};

export {Media, MediaNew, Image};
