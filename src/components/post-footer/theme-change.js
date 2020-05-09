import {html} from 'htm/preact';
import {isServer} from '../../utils/which_env';
import {useState} from 'preact/hooks';

const ThemeChange = () => {
  if (isServer) return;
  const [active, setActive] = useState(false);
  const body = document.querySelector('body');
  const toggle = () => {
    body.classList.toggle('theme-dark');
    setActive(!active);
  };

  return html`
    <button onCLick="${toggle}">${active ? html`<div className="w-5 h-5 rounded-full"  style="background: transparent; box-shadow: inset -6px 0px #fff, inset -6px 0px 1px 1px #fff;"></div>` : html`<div className="w-5 h-5 rounded-full"  style="background: #DC8A3F; box-shadow: 0px 0px 12px #F1E46E;" />`} </button>
  `;
};

export {
  ThemeChange,
};