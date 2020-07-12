import { html } from "htm/preact";
import {Image} from '../media';


const CardVertical = ({ data }) => {
  return html`
    <div
      className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-start mb-10"
    >
      <${Image}
        src="${data.src}"
        alt=""
        className="h-64 w-64 lg:mr-10 object-cover"
      />
      <div
        className="flex flex-col leading-loose mt-5 items-center lg:items-start"
      >
        <h5 className="uppercase font-bold text-primary-lighter">
          ${data.title}
        </h5>
        <span>${data.subtitle}</span>
      </div>
    </div>
  `;
};


export const CardTileVertical = ({ cards }) => {
  return html`
    <section className="py-16">
      <div className="container px-5 lg:px-16 grid grid-cols-3">
        <div className="lg:col-start-2 col-span-3 lg:col-span-2">
          ${cards.map((card) => html` <${CardVertical} data="${card}" /> `)}
        </div>
      </div>
    </section>
  `;
};

