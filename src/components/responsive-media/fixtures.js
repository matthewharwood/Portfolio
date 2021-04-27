import {fixtures as image_fixtures} from '../responsive-image/fixtures';

const VIDEO_FIXTURES = {
  defaultVideoSrc: 'uber/data-flow-mobile-4x5_l1zfuf.mp4',
  lgVideoSrc: 'uber/data-flow-desktop-16x9_eakm8s.mp4',
  isVideo: true,
};


export const fixtures = {
  MainLooping: {...VIDEO_FIXTURES, ...{playState: 'loop', responsiveImage: image_fixtures.MainAspectRatio}},
  MainPlayOnce: {...VIDEO_FIXTURES, ...{playState: 'playOnce', responsiveImage: image_fixtures.MainAspectRatio}},
  MainIsControls: {...VIDEO_FIXTURES, ...{playState: 'controls', responsiveImage: image_fixtures.MainAspectRatio}},
  MainIsImage: {...{playState: 'controls', responsiveImage: image_fixtures.MainAspectRatio}}
}
