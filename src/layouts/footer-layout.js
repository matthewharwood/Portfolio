import {html} from 'htm/preact';
import {PostFooter} from '../components/post-footer';

const FooterLayout = ({children}) => {
  return html`
     ${children}
     <${PostFooter} />
  `;
}

const HomeLayout = ({children}) => {
  return html`
     ${children}
  `;
}

export {
  HomeLayout,
  FooterLayout
}
