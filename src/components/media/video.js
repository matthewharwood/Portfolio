import {html} from 'htm/preact';
import {useStatic} from '../../hooks/use_static';
import {decode} from 'universal-base64';

const Video = ({src, playsInline, autoPlay, className="", poster}) => {
  const id = poster && poster.asset && poster.asset.source && poster.asset.source.id;
  const decodedId = id ? JSON.parse(decode(id)).public_id : '';
  const atobSrc = decodedId + '.jpg';
  const thumbSrc = useStatic(atobSrc);
  return html`
    <video className="flex w-full h-full ${className}" muted loop autoplay playsinline poster="${thumbSrc}">
      <source src="${useStatic(src)}" type="video/mp4" />
       Your browser does not support the video tag.
    </video>`;
};
const isVideo = (src) => src.includes('.mp4');
export {
  Video,
  isVideo
}
