import { html } from "htm/preact";
import {BackgroundColor} from '../../utils/background_colors';


const Icons = {
  figma: () => html`<svg class="fill-current w-5 h-5 mr-2" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 27.9993C6.984 27.9993 9 25.9087 9 23.3327V18.666H4.5C2.016 18.666 0 20.7567 0 23.3327C0 25.9087 2.016 27.9993 4.5 27.9993Z" fill="#0ACF83"/>
<path d="M0 14.0007C0 11.4247 2.016 9.33398 4.5 9.33398H9V18.6673H4.5C2.016 18.6673 0 16.5767 0 14.0007Z" fill="#A259FF"/>
<path d="M0 4.66667C0 2.09067 2.016 0 4.5 0H9V9.33333H4.5C2.016 9.33333 0 7.24267 0 4.66667Z" fill="#F24E1E"/>
<path d="M9 0H13.5C15.984 0 18 2.09067 18 4.66667C18 7.24267 15.984 9.33333 13.5 9.33333H9V0Z" fill="#FF7262"/>
<path d="M18 14.0007C18 16.5767 15.984 18.6673 13.5 18.6673C11.016 18.6673 9 16.5767 9 14.0007C9 11.4247 11.016 9.33398 13.5 9.33398C15.984 9.33398 18 11.4247 18 14.0007Z" fill="#1ABCFE"/>
</svg>
`
}


export const PrimaryButton= ({
  link = 'Design System',
  icon = 'figma',
  href,
  ariaLabel,
  onClick,
  target,
  }) => {
  if(href) {
    return html`
    <a
      aria-label="${ariaLabel}"
      href="${href}"
      target="${target || '_self'}"
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
      <${Icons[icon]} />
      <span>${link}</span>
    </a>
  `;
  }
  return html`
    <button
      aria-label="${ariaLabel}"
      onClick="${onClick}"
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
      <${Icons[icon]} />
      <span>${link}</span>
    </button>
  `;
};


