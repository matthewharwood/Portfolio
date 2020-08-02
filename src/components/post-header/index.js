import { html } from "htm/preact";

export const PostHeader = ({ heading, description, tag, info }) => {
  return html`
    <section className="bg-black text-tertiary pt-12">
      <div className="container px-5 lg:px-16 py-16">
        <div className="flex flex-col">
          <span className="text-tertiary-lighter uppercase font-bold text-xs tracking-widest">
            ${tag.name}
          </span>
          <h1 className="text-3xl lg:text-5xl pb-4 md:p-0 font-mono leading-normal">${heading}</h1>
          <p className="text-xl">${description}</p>
        </div>
        <div className="flex border-t mt-5 pt-5">
        <div
          className="inline-flex flex-col flex-wrap sm:max-h-1/3 lg:max-h-1/4"
        >
          ${info.map(
            (infoItem) => html` <${PostHeaderColumn} ...${infoItem} /> `
          )}
        </div>
        </div>
      </div>
    </section>
  `;
};

const PostHeaderColumn = ({ heading, values }) => {
  return html`
    <div className="mb-5 pr-10">
      <span className="text-xxs tracking-widest opacity-75 text-tertiary-lighter uppercase font-bold"
        >${heading}</span
      >
 
      ${values.map(({name}) => {
        return html`<p className="">${name}</p>`
      })}
    </div>
  `;
};
