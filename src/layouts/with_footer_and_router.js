import { html } from "htm/preact";
import { PostLayout } from "../layouts/post-layout";

const withFooterAndRouter = (props) => (Component) => {
  return html`
    <${PostLayout} ...${props}>
        <${Component} />
    </PostLayout>
  `;
};

export { withFooterAndRouter };
