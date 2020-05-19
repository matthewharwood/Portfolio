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
export {
  Video,
  isVideo
}