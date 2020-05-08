import {html} from 'htm/preact';
import {PostFooter} from '../components/post-footer';

const FooterLayout = ({children}) => {
  return html`
     ${children}
     <${PostFooter} />
  `;
}

export {
  FooterLayout
}