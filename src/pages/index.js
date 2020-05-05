import {AH} from '../components/component_map';
import {Navigation} from '../components/navigation';
import {html} from 'htm/preact';

export const Index = () => {
  return html`
    <div class="md:grid md:grid-rows-2 md:grid-cols-4 md:gap-4 h-screen relative z-10" data-router-view="index">
      <h1 className="font-mh text-2xl md:text-6xl flex flex-col uppercase font-bold tracking-widest pt-8 md:pt-16 pl-8 md:pb-16 md:pl-16 leading-none text-black">
        <span className="flex">Good</span>
        <span className="flex">Morning</span>
        <span className="flex">Harwood</span>
      </h1>

      <div class=" md:grid md:row-end-3 md:col-span-2 pt-4 pl-8 md:pb-16 md:pl-16 items-end box-border">
        <${AH.RunningHeader} />
      </div>
      
      <${Navigation} />
      <${AH.Polymorph} />
    </div>

  `;
};
