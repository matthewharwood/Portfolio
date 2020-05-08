import {LabCard} from '../../components/card/lab_card';
import {html} from 'htm/preact';

const PADDING = 'p-10';
const LabLinks =[
  {name: 'rorschach', src:"rorschach/rorschach.mp4", href: 'lab/rorschach/', tags: ['wow'], description: 'lorem ipsum'}
];

export const Lab = () => {
  return html`
    <div className="pt-32 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-3 leading-tight ${PADDING}">
        <h1 className="text-6xl font-bold">Lab</h1>
        <span className="text-xl font-bold">A Laboratory of Experiments</span>
      </div>
      <${Row} />
    </div>
  `;
};

const HeadingBlock = () => {
  return html`
    <div className=" ${PADDING}">
      <h2 className="text-3xl font-bold">Todo</h2>
    </div>
  `;
};

const Row = () => {

  return html`
    <div className="min-h-screen py-2 flex flex-col mb-10">
      <${HeadingBlock} />
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