import {html} from 'htm/preact';
import {ResponsiveImage} from '../responsive-image';
import {
  calculatePostersFromCloudinaryVideo,
  calculateVideoSrcFromCloudinary
} from '../../utils/calculate-src';
import {AspectRatioBox} from '../aspect-ratio';

const ResponsiveMedia = (props) => {
  const {isVideo, defaultVideoSrc, lgVideoSrc, responsiveImage, playState = 'loop'} = props;
  const {aspectRatios} = responsiveImage || {};
  const hasAspectRatios = aspectRatios.defaultAspectRatio || aspectRatios.lgAspectRatio;

  const playStateMap = {
    playOnce: {loop: false, muted: true, autoplay: true, playsinline: true},
    loop: {loop: true, muted: true, autoplay: true, playsinline: true},
    controls: {loop: false, muted: false, autoplay: false, playsinline: true, controls: true},
  };

  if(isVideo) {
    return html`
      <${AspectRatioBox} ...${aspectRatios}>
        <div  className="${hasAspectRatios ? 'absolute' : ''} w-full">
          <video className="lg:hidden flex w-full h-full" ...${playStateMap[playState]} poster="${calculatePostersFromCloudinaryVideo(defaultVideoSrc)}">
            <source src="${calculateVideoSrcFromCloudinary(defaultVideoSrc)}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="hidden lg:flex w-full h-full" ...${playStateMap[playState]} poster="${calculatePostersFromCloudinaryVideo(lgVideoSrc)}">
            <source src="${calculateVideoSrcFromCloudinary(lgVideoSrc)}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      <//>
    `;
  }

  return html`<${ResponsiveImage} ...${responsiveImage}/>`
}

export {
  ResponsiveMedia
}
