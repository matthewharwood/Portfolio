import {html} from 'htm/preact';
import {useStatic} from '../../hooks/use_static';
import {useState} from 'preact/hooks';
import {Image} from '../media';

const VideoCard = (props) => {

  const {poster = 'sample.jpg', title = 'sample', videoSrc = 'rorschach/rorschach.mp4'} = props;
  const [state, update] = useState(false);
  const toggle = () => update(!state);
  return html`
    <div className="w-full relative" onClick="${toggle}">
      <div className="relative">
        <${Image} src="${props.poster}"/>
        <h5 className="font-bold uppercase text-tertiary mt-2">${title}</h5>
      </div>
      <div
        className="flex justify-center items-center absolute inset-0 bg-transparent"
      >
        >
      </div>
      
    </div>
    <div className="${state ? 'block fixed inset-0 z-10 bg-primary' : 'hidden'}">
        <button className="fixed top-0 z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick="${toggle}" >close</button>
        <div className="h-0 overflow-hidden pt-16/9">
            <div className="left-0 top-0 absolute w-full h-full">
            <video src="${useStatic(videoSrc)}"  playsinline autoplay muted loop  className="flex h-full justify-center items-center mx-auto w-full"/>
            </div>
        </div>

    </div>
  `;
};

export {VideoCard};
