import { html } from "htm/preact";
import {Mono, Sans} from '../typography';

export const Headline = ({ hasBorder=false, number, title, text }) => {
  return html`
    <section>
      <div className="container px-5 lg:px-16 py-8 lg:py-16 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-1">
          <span>${number}</span>
          <h3 className="${Mono.xl4}">${title}</h3>
        </div>
        <div className="col-span-3 lg:col-span-2 ${Sans.xl}">${text}</div>
      </div>
      ${hasBorder &&
      html` <div className="container px-5 lg:px-16 w-full">
        <div className="h-px w-full bg-border"></div>
      </div>`}
    </section>
  `;
};

