import {LabCard} from '../../components/card/lab_card';
import { AH } from "../../components/component_map";
import {html} from 'htm/preact';

export const Lab = () => {
  return html`
    <div class="flex flex-wrap m-auto p-2 px-4 lg:px-16 4bg-gray-200 min-h-screen relative" data-router-view="lab">
      <div class="w-full">
        <h1 class="text-6xl">Lab</h1>
      </div>
      ${[1,2,3,4,5,6].map(() => {
        return html`
            <a class="px-3 w-full w-full mb-4 lg:w-1/3" href="${'http://localhost:8000/lab/rorschach'}">
                <${LabCard} />
            </a>
        `    
      })}  
    </div>
  `;
};
