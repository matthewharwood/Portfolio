import {html} from 'htm/preact';
import {ResponsiveImage} from '../responsive-image';
import {
  calculatePostersFromCloudinaryVideo,
  calculateVideoSrcFromCloudinary
} from '../../utils/calculate-src';

const ResponsiveMedia = (props) => {
  const {isVideo, defaultVideoSrc, lgVideoSrc, responsiveImage, playState = 'loop'} = props;

  const playStateMap = {
    playOnce: {loop: false, muted: true, autoplay: true, playsinline: true},
    loop: {loop: true, muted: true, autoplay: true, playsinline: true},
    controls: {loop: false, muted: false, autoplay: false, playsinline: true, controls: true},
  };

  if(isVideo) {
    return html`
      <video className="lg:hidden flex w-full h-full" ...${playStateMap[playState]} poster="${calculatePostersFromCloudinaryVideo(defaultVideoSrc)}">
        <source src="${calculateVideoSrcFromCloudinary(defaultVideoSrc)}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="hidden lg:flex w-full h-full" ...${playStateMap[playState]} poster="${calculatePostersFromCloudinaryVideo(lgVideoSrc)}">
        <source src="${calculateVideoSrcFromCloudinary(lgVideoSrc)}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;
  }

  return html`<${ResponsiveImage} ...${responsiveImage}/>`
}

export {
  ResponsiveMedia
}
