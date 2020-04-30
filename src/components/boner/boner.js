import {useRef, useLayoutEffect} from 'preact/hooks';
import { easing, keyframes, styler } from 'popmotion';
import {html} from 'htm/preact';

const Boner = () => {
  const childRef = useRef();

  useLayoutEffect(() => {
    if(typeof document === 'undefined') return;

    const portalS = styler(childRef.current);
    keyframes({
      values: [
        {  scaleX: 0, rotateZ: 0, transformOrigin: 'left center' },
        {  scaleX: 1, rotateZ: 0, transformOrigin: 'left center' },
        {  scaleX: 1,  rotateZ: -35,  transformOrigin: 'left center' },
      ],
      duration: 3000,
      easings: easing.easeInOut,
    }).start(portalS.set)
  })



  return html`
  <div class="center">
    <div class="relative">
      <div ref="${childRef}" className="bg-gray-200 boner-shadow relative"></div>
    </div>
  </div>
  `
}
export {
  Boner,
}
