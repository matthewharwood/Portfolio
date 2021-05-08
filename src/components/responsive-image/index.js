import {html} from 'htm/preact';

import {calculateImageSrcFromCloudinary} from '../../utils/calculate-src';
import {AspectRatioBox} from '../aspect-ratio';

const ResponsiveImage = (props) => {
  const placeholders = {
    defaultSrc1x: 'https://placebear.com/640/800',
    defaultSrc2x: 'https://placebear.com/1280/1600',
    lgSrc1x: 'https://placebear.com/1920/1024',
    lgSrc2x: 'https://placebear.com/3840/2048',
  };
  const {altText, defaultSrc, lgSrc, aspectRatios = {}} = props;
  const _defaultSrc2x = calculateImageSrcFromCloudinary(defaultSrc, 'w_640,h_800,dpr_2.0');
  const _defaultSrc1x = calculateImageSrcFromCloudinary(defaultSrc, 'w_640,h_800,dpr_1.0');
  const _lgSrc2x = calculateImageSrcFromCloudinary(lgSrc, 'w_1920,h_1024,dpr_2.0');
  const _lgSrc1x = calculateImageSrcFromCloudinary(lgSrc, 'w_1920,h_1024,dpr_1.0');
  const hasAspectRatios = aspectRatios.defaultAspectRatio || aspectRatios.lgAspectRatio;

  return html`
    <${AspectRatioBox} ...${aspectRatios}>
      <picture className="${hasAspectRatios ? 'absolute' : ''} w-full">
        <source
          srcset="${_lgSrc2x || placeholders.lgSrc2x} 2x,${_lgSrc1x || placeholders.lgSrc1x}"
          media="(min-width: 1024px)"
          className="w-full"
        />
        <img
          srcset="${_defaultSrc2x || placeholders.defaultSrc2x} 2x"
          src="${_defaultSrc1x || placeholders.defaultSrc1x}"
          alt="${altText}"
          className="w-full"
        />
      </picture>
    <//>
  `;
};
export {ResponsiveImage};
