import { html } from "htm/preact";
import { Image } from "../media";
import {useWindowSize} from '../../hooks/use_window_size';
import {generateSpacingClassString} from '../_parts/spacer';
// import {useState, useCallback} from 'preact/hooks';
// import {useIsVisible} from '../../hooks/use_is_visible';
// import {useInterval} from '../../hooks/use_interval';

const SlideshowImage = ({item, leftOffset}) => {
  return html`
    <div  className="w-1/6 absolute" style="${leftOffset}"> <${Image} src="${item.imgSrc}" alt="" /></div>
  `;
}

const Slideshow = (props) => {
  const spacingClasses = generateSpacingClassString(props);
  const windowSize = useWindowSize();
  const offset = windowSize.width/6;
  // const [teleport, updateTeleport] = useState(0);
  // const [parentOffset, updateParentOffset] = useState(1);
  //
  // useInterval(() => {
  //   updateTeleport((teleport + 1));
  //   console.log('iterate', teleport);
  // }, 2000)

  if(!(offset >= 0)) {
    return;
  }

  return html`
    <section className="flex relative aspect-ratio-5/2 ${spacingClasses} overflow-hidden">
      ${props.images.map((item, index) => {
        const leftOffset = {left: offset * index + 'px'};
        return html`<${SlideshowImage} leftOffset="${leftOffset}" item="${item}" />`
      })}
    </section>
  `
};

export {
  Slideshow,
}
