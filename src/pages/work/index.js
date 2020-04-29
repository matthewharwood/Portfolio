import {html} from '../../utils';
import {Navigation} from '../../components/navigation';
import {AH} from '../../components/component_map'

export const Work = () => {
  console.log('yooooo');
  return html`
    <div>
        <${AH.Navigation}>Hello<//>
        <${Navigation}>hello<//>
    </div>
  `;
};
