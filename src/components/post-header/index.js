import { html } from "htm/preact";

export const PostHeader = ({ heading, description, subtext, info }) => {
  return html`
    <section className="bg-black text-tertiary pt-12">
      <div className="container px-5 lg:px-16 py-16">
        <div className="flex flex-col">
          <span className="text-accent uppercase font-bold">
            ${subtext}
          </span>
          <h1 className="text-5xl">${heading}</h1>
          <p className="text-xl">${description}</p>
        </div>
        <div
          className="grid grid-flow-col grid-cols-1 lg:grid-cols-3 grid-rows-2 border-t mt-5 pt-5"
        >
          ${info.map(
            (infoItem) => html` <${PostHeaderColumn} ...${infoItem} /> `
          )}
        </div>
      </div>
    </section>
  `;
};

const PostHeaderColumn = ({ heading, text }) => {
  return html`
    <div className="flex flex-col mb-5">
      <span className="text-sm text-tertiary uppercase font-bold"
        >${heading}</span
      >
      <span className="italic">${text}</span>
    </div>
  `;
};
