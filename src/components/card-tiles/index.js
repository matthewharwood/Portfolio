import { html } from "htm/preact";
import {Image} from '../media';


const CardTile = ({ src, title, subtitle, text }) => {
  return html`
    <div className="bg-secondary-lighter grid grid-cols-4 gap-10 p-5 shadow">
      <div className="col-span-1">
        <${Image} src="${src}" alt="" />
      </div>
      <div className="col-span-3 flex flex-col text-primary-lighter">
        <h5 className="font-bold uppercase">${title}</h5>
        <span className="uppercase text-xs"
          >${subtitle}</span
        >
      </div>
      ${text && html`<p className="col-span-4">${text}</p>`}
    </div>
  `;
};

export const CardTiles = ({ cards }) => {
  console.log(cards);
  return html`
    <section className="py-5">
      <div className="container sm:px-5 lg:px-16 grid grid-cols-3">
        <div
          className="lg:col-start-2 col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          ${cards.map((card) => {
            console.log(card);
            return html`<${CardTile} ...${card} />`
          })}
        </div>
      </div>
    </section>
  `;
};


