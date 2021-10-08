import { html } from "htm/preact";
import {SpacingContainer} from '../_parts/spacer';

export const Summary = (props) => {
  const {
    number,
    heading,
    text,
    ui = {}
  } = props;
  const {lgColumns = 4} = ui;

  return html`
    <${SpacingContainer} ...${props} name="Summary">
      <section className="flex flex-col items-center">
        <div className="container grid grid-cols-6">
          <div className="col-span-6 lg:col-span-${lgColumns} flex flex-col">
            <span className="text-xl text-accent font-mono">${number}</span>
            <h2 className="text-4xl font-mono mb-12">${heading}</h2>
            <p className="leading-loose text-lg whitespace-pre-line">${text}</p>
          </div>
        </div>
      </section>
    <//>
  `;
};