import { html } from "htm/preact";
import {Mono} from '../typography';

export const Quote = ({
  quote,
  person,
  title,
  date,
}) => {
  return html`
    <section className="mx-auto container">
      <div className="container mx-auto inline-grid grid-cols-12 gap-4 justify-center">
        <div className="col-start-3 col-end-11">
          <p className="relative italic ${Mono.xl}">${quote}</p>
          <div
            className="flex flex-col self-end text-xs justify-end text-right text-primary mt-5"
          >
            <span className="${Mono.sm}">${person}</span>
            <span className="${Mono.sm}">${title}</span>
            <span className="${Mono.sm}">${date}</span>
          </div>
        </div>
      </div>
    </section>
  `;
};
