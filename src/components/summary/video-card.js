import {html} from 'htm/preact';
import {useStatic} from '../../hooks/use_static';
import {useState} from 'preact/hooks';

const VideoCard = (props) => {

  const {poster = 'sample.jpg', title = 'sample'} = props;
  const [state, update] = useState(false);
  console.log(poster, useStatic(poster));
  const toggle = () => {
    console.log(state);
    update(!state);
    console.log(state);
  };
  return html`
    <div className="w-full relative" onClick="${toggle}">
      <div className="relative">
        <img
          src="${useStatic(poster)}"
          alt=""
          className="h-64 w-full object-cover"
        />
        <h5 className="font-bold uppercase text-tertiary mt-2">${title}</h5>
      </div>
      <div
        className="flex justify-center items-center absolute inset-0 bg-transparent"
      >
        >
      </div>
      
    </div>
    <div className="${state ? 'block' : 'hidden'}">
        <div onClick="${toggle}">close</div>
        <h1>modal</h1>
    </div>
  `;
};

export {VideoCard};