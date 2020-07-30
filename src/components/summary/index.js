import { html } from "htm/preact";
import {AH} from '../component_map';

export const Summary = ({
  number,
  heading,
  text,
  hasBorder = false,
  videos,
}) => {
  return html`
    <section className="flex flex-col items-center">
      <div className="container py-16 px-5 lg:px-16 grid grid-cols-6">
        <div className="col-span-6 lg:col-span-4 flex flex-col">
          <span className="text-xl text-accent font-mono">${number}</span>
          <h2 className="text-5xl font-mono">${heading}</h2>
          <p className="mt-5 leading-loose text-xl">${text}</p>
        </div>
      </div>
    </section>
  `;
};
