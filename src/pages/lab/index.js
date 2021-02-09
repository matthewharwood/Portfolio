import {LabCard} from '../../components/lab-card/lab-card';
import {html} from 'htm/preact';

const PADDING = 'p-10';
const LabLinks =[
  {name: 'Rorschach CSS', src:"rorschach/rorschach.mp4", href: 'lab/rorschach/', tags: ['random', 'art', 'css'], description: 'Some paint, paper, and CSS'},
];
const LabLinks2 = [
  {name: 'Monkey Mech', src:"labs/monkey-mech/vampire_c4jmyx.png", href: 'lab/monkey-mech/', tags: ['game-design', 'unity', 'VR'], description: 'Upcoming game for Oculus Quest'}
]

export const Lab = () => {
  return html`
    <div className="pt-32 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <${Row} links="${LabLinks}"/>
      <${Row} links="${LabLinks2}"/>
    </div>
  `;
};


const Row = ({links}) => {

  return html`
    <div className="min-h-screen py-2 flex flex-col mb-10">
      <div className="mt-2">
        ${links.map((card) => html`

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
