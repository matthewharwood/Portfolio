import {html} from 'htm/preact';
import {PostHeader} from '../../components/post-header';
import { data } from "./data/uber-dotcom-performance";

const Uber = () => {
  return html`
     <${PostHeader} ...${data.postHeaderBlockData} />
  `;
}

export {
  Uber,
}