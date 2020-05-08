import {html} from 'htm/preact';
import {useStatic} from '../../hooks/use_static';

const Video = ({src}) => {
  return html`
    <video className="flex w-full h-full" autoplay muted loop>
      <source src="${useStatic(src)}" type="video/mp4" />
       Your browser does not support the video tag.
    </video>`;
};

const isVideo = (src) => src.includes('.mp4');

const Media = ({src, alt, classNames=''}) => isVideo(src) ? html`<${Video} className="${classNames}" src=${src} />`
    : html`<img className="${classNames}" src="${useStatic(src)}" alt="${alt}" />`;

export {
  isVideo,
  Video,
  Media,
};