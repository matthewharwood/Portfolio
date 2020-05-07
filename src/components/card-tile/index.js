import { html } from "htm/preact";
const BG_COLOR = "bg-gray-100";

export const CardTile = ({ hasBackground, cards }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass} py-16">
      <div className="container px-5 lg:px-16 grid grid-cols-3">
        <div className="lg:col-start-2 col-span-3 lg:col-span-2">
          ${cards.map((card) => html` <${Card} data="${card}" /> `)}
        </div>
      </div>
    </section>
  `;
};

const Card = ({ data }) => {
  return html`
    <div
      className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-start mb-10"
    >
      <img
        src="${data.image}"
        alt=""
        className="h-64 w-64 lg:mr-10 object-cover"
      />
      <div
        className="flex flex-col leading-loose mt-5 items-center lg:items-start"
      >
        <h5 className="uppercase font-bold text-gray-600">${data.title}</h5>
        <span>${data.subtitle}</span>
      </div>
    </div>
  `;
};


