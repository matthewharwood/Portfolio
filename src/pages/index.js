import {html} from '../utils';
import {Navigation} from '../components/navigation';
import {AH} from '../components/component_map';

export const Index = () => {
  return html`
    <div>
     <${AH.RunningHeader} />
       Hello worldz
    </div>
  `;
};
