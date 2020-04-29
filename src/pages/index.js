import {html} from '../utils';
import {Navigation} from '../components/navigation';


export const Index = () => {
  return html`
    <div>
     <${Navigation} />
       Hello worldz
    </div>
  `;
};
