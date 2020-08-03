import {html} from 'htm/preact';
import {useState} from 'preact/hooks';
import {Image, Video} from '../media';

const VideoCard = (props) => {
  const {poster, title = 'sample', videoSrc = 'rorschach/rorschach.mp4'} = props;
  const [state, update] = useState(false);
  const toggle = () => update(!state);

  return html`
    <div className="w-full relative cursor-pointer group text-gray-800 hover:text-gray-700 transition duration-300 ease-in-out transition-opacity" onClick="${toggle}">
      <div className="relative">
        <div className="relative pb-16/9">
            <div className="absolute top-0 h-full w-full">
              <${Image} src="${poster}" className="object-cover h-full w-full grayscale opacity-25 group-hover:opacity-50 transition duration-300 ease-in-out transition-opacity"/>
            </div>
            <div className="absolute inset-0 -ml-8 -mt-8 transform translate-x-1/2 translate-y-1/2">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                <path  d="M20.9998 0.166992C9.49984 0.166992 0.166504 9.50033 0.166504 21.0003C0.166504 32.5003 9.49984 41.8337 20.9998 41.8337C32.4998 41.8337 41.8332 32.5003 41.8332 21.0003C41.8332 9.50033 32.4998 0.166992 20.9998 0.166992ZM16.8332 30.3753V11.6253L29.3332 21.0003L16.8332 30.3753Z" />
              </svg>
            </div>
        </div>
        <h5 className="font-bold uppercase text-tertiary mt-2 group-hover:text-current">${title}</h5>
      </div>
    </div>
    ${state && (
       html`<div className="${state ? 'block fixed inset-0 z-10 bg-primary' : 'hidden'}">
        <button className="fixed right-6 top-24 z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick="${toggle}">
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 14.1L33.9 12L24 21.9L14.1 12L12 14.1L21.9 24L12 33.9L14.1 36L24 26.1L33.9 36L36 33.9L26.1 24L36 14.1Z" fill="white"/>
         </svg>

        </button>
        <div className="h-0 overflow-hidden pt-16/9">
          <div className="left-0 top-20 bottom-2 absolute w-full h-full">
            <${Video} src="${videoSrc}" className="flex h-full justify-center items-center mx-auto w-full"/>
          </div>
        </div>
      </div>`
    )}
   
  `;
};

export {VideoCard};
