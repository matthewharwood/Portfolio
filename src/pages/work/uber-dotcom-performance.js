import {html} from 'htm/preact';
import {PostHeader} from '../../components/post-header';
import { data } from "./data/uber-dotcom-performance";

const UberDotcomPerformance = () => {
  return html`
     <${PostHeader} ...${data.postHeaderBlockData} />
  `;
}

export {
  UberDotcomPerformance,
}