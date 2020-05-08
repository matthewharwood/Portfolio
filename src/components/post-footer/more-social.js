import {html} from 'htm/preact';
import {useState} from 'preact/hooks';




const MoreSocial = () => {
  const [isVisible, setIsVisible] = useState(false);
  return html`
    <button className="h-5 w-5 ml-3" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#333"
          d="M3 6c1.65 0 3-1.35 3-3S4.65 0 3 0 0 1.35 0 3s1.35 3 3 3zm0 3c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 9c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"
        />
      </svg>
    </button>
  `;
};

export {
  MoreSocial,
};