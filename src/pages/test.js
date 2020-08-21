import {AH} from '../components/component_map';
import {html} from 'htm/preact';

export const Test = () => {
  return html`
    <div className="pt-32"><${AH.InfiniteImageScroll}/></div>
  `;
};
