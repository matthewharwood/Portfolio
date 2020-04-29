import {html} from '../../utils';
import {Navigation} from '../../components/navigation';

export const Profile = () => {
  return html`
    <div>
     <${Navigation} />
       Profile Page
    </div>
  `;
};
