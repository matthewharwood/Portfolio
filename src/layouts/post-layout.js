import {html} from 'htm/preact';
import {RouterLayout} from './router-layout';
import {FooterLayout, HomeLayout} from './footer-layout';


const PostLayout = ({title, children}) => {
  return html`
    <${RouterLayout} title="${title}">
      <${FooterLayout}>
        ${children}
      <//>
    <//>
  `;
};

const PostLayoutWithoutFooter = ({title, children}) => {
  return html`
    <${RouterLayout} title="${title}">
      <${HomeLayout}>
        ${children}
      <//>
    <//>
  `;
};

export {
  PostLayoutWithoutFooter,
  PostLayout,
}
