import {LabCard} from '../../components/card/lab_card';
import {html} from 'htm/preact';

const PADDING = 'p-10';
const LabLinks =[
  {name: 'rorschach', src:"rorschach/rorschach.mp4", href: 'lab/rorschach/', tags: ['random', 'art', 'css'], description: 'lorem ipsum'}
];

export const Lab = () => {
  return html`
    <div className="pt-32 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <${Row} />
    </div>
  `;
};


const Row = () => {

  return html`
    <div className="min-h-screen py-2 flex flex-col mb-10">
      <div className="mt-2">
        ${LabLinks.map(
      (card) => html`
            <div className="lg:mb-10">
              <${LabCard} ...${card} />
              <div className="mb-2" />
            </div>
          `
  )}
      </div>
    </div>
  `;
};