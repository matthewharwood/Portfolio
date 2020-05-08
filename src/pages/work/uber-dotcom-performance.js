import {html} from 'htm/preact';
import {PostLayout} from '../../layouts/post-layout';
import {PostHeader} from '../../components/post-header';
import { data } from "./data/uber-dotcom-performance";

const UberDotcomPerformance = () => {
  return html`
     <${PostHeader} ...${data.postHeaderBlockData} />
  `;
}


const UberDotcomPerformancePage = (props) => {
  return html`
     <${PostLayout} ...${props}>
        <${UberDotcomPerformance} />
    </PostLayout>
  `
};

export {
  UberDotcomPerformance,
  UberDotcomPerformancePage
}