import {AH} from '../component_map';
import {html} from '../../utils';
import {navigationLinks} from '../../_data/navigation';


const Navigation = () => {
  return html`
    <nav class="fixed bottom-0 right-0 items-end md:grid md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-5 lg:col-start-4 items-end pr-4 pb-2 md:pb-16 md:pr-16 box-border">
      ${navigationLinks.map((nl, index) => html`<${AH.NavigationItem} link="${nl.link}" index="${index}"/>`)}
    </nav>
  `
}

export {
  Navigation
}