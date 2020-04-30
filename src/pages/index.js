import {html} from '../utils';
import {AH} from '../components/component_map';
import {Navigation} from '../components/navigation';

export const Index = () => {
  return html`

    <div data-router-view="index">
      <${Navigation} />
      <div >
       <${AH.RunningHeader} />
      </div>
    </div>
   
  `;
};
