import {AH} from '../components/component_map';
import {Navigation} from '../components/navigation';
import {html} from 'htm/preact';
import {Logo} from '../components/logo';

export const Index = () => {
  return html`
    <div class="md:grid md:grid-rows-2 md:grid-cols-2 h-screen relative z-10" data-router-view="index">
      <${Logo} />

      <div class="md:grid md:row-end-3 md:col-span-2 pt-4 pl-8 md:pb-16 md:pl-16 items-end box-border">
        <${AH.RunningHeader} />
      </div>
      
      <${Navigation} />
      
      <${AH.Polymorph} />
    </div>
  `;
};


