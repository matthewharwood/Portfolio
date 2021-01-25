import { html } from "htm/preact";

export const Summary = ({
  number,
  heading,
  text,
  ui = {},
}) => {
  const {lgColumns = 4} = ui;
  return html`
    <section className="flex flex-col items-center">
      <div className="container py-44 px-5 lg:px-16 grid grid-cols-6">
        <div className="col-span-6 lg:col-span-${lgColumns} flex flex-col">
          <span className="text-xl text-accent font-mono">${number}</span>
          <h2 className="text-4xl font-mono mb-12">${heading}</h2>
          <p className="leading-loose text-lg">${text}</p>
        </div>
      </div>
    </section>
  `;
};
