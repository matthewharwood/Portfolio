import { html } from "htm/preact";
const BG_COLOR = "bg-gray-100";

export const Headline = ({ hasBackground, hasBorder=false, title, text }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass}">
      <div className="container px-5 lg:px-16 py-8 lg:py-16 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-1">
          <h3 className="text-3xl uppercase">${title}</h3>
        </div>
        <div className="col-span-3 lg:col-span-2">${text}</div>
      </div>
      ${hasBorder &&
      html` <div className="container px-5 lg:px-16 w-full">
        <div className="h-px w-full bg-gray-400"></div>
      </div>`}
    </section>
  `;
};

