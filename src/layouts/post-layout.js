import {html} from 'htm/preact';
import {RouterLayout} from './router-layout';
import {FooterLayout} from './footer-layout';


const PostLayout = ({title, children}) => {
  return html`
    <${RouterLayout} title="${title}">
      <${FooterLayout}>
        ${children}
      <//>
    <//>
  `;
};

export {
  PostLayout,
}