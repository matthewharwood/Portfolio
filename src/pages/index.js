import {html} from '../utils';
import {AH} from '../components/component_map';
import {Navigation} from '../components/navigation';

export const Index = () => {
  return html`
    <div class="md:grid md:grid-rows-2 md:grid-cols-4 md:gap-4 h-screen bg-gray-200" data-router-view="index">
      <img class="md:grid col-span-4 pt-8 pl-8 pr-32 md:pt-16 md:pl-16 md:pr-0 box-border" src="http://localhost:3000/static/good_morning_harwood_logo.svg" alt="Good Morning Harwood Logo" />
      <div class=" md:grid md:row-end-3 md:col-span-2 pt-4 pl-8 md:pb-16 md:pl-16 items-end box-border">
        <${AH.RunningHeader} />
      </div>
      <div>
        <div class="fixed inset-0"></div>
      </div>
      <${Navigation} />
    </div>
  `;
};
