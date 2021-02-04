import { html } from "htm/preact";
import { PostLayout, PostLayoutWithoutFooter } from './post-layout';

const withFooterAndRouter = (props) => (Component) => {
  return html`
    <${PostLayout} ...${props}>
        <${Component} />
    </PostLayout>
  `;
};

const withRouter = (props) => (Component) => {
  return html`
    <${PostLayoutWithoutFooter} ...${props}>
        <${Component} />
    <//>
  `;
};

export { withFooterAndRouter, withRouter };
