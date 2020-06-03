import { html } from "htm/preact";
import {AH} from '../component_map';

export const Summary = ({
  number,
  heading,
  text,
  hasBorder = false,
  videos,
}) => {
  console.log(AH.VideoCard)
  return html`
    <section className="flex flex-col items-center">
      <div className="container py-16 px-5 lg:px-16 grid grid-cols-6">
        <div className="col-span-6 lg:col-span-5 flex flex-col">
          <span className="text-2xl text-accent">${number}</span>
          <h2 className="text-5xl">${heading}</h2>
          <p className="mt-5 leading-loose">${text}</p>
        </div>
        <div className="lg:row-start-2 col-span-6 lg:col-span-5 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          ${videos.map(p => html`<${AH.VideoCard} ..${p} />`)}
        </div>
      </div>
      ${hasBorder &&
      html` <div className="container px-5 lg:px-16 w-full">
        <div className="h-px w-full bg-border"></div>
      </div>`}
    </section>
  `;
};