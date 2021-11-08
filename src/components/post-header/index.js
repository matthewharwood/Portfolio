import { html } from "htm/preact";
import { SpacingContainer } from "../_parts/spacer";

export const PostHeader = (props) => {
  return html`
    <section className="bg-primary text-secondary pt-12">
      <${SpacingContainer} ...${props} name="Post Header">
        <header className="container">
          <div className="flex flex-col">
            <span
              className="text-tertiary-lighter uppercase font-bold text-xs tracking-widest mb-5"
            >
              ${props.tag.name}
            </span>
            <h1
              className="text-3xl lg:text-5xl pb-4 md:p-0 font-mono leading-normal mb-3"
            >
              ${props.heading}
            </h1>
            <p className="text-xl">${props.description}</p>
          </div>
          <div className="border-t pt-10 mt-12">
            <div className="flex flex-col flex-wrap sm:max-h-1/3 lg:max-h-1/4">
              ${props.info.map(
                (infoItem) => html` <${PostHeaderColumn} ...${infoItem} /> `
              )}
            </div>
          </div>
        </header>
      <//>
    </section>
  `;
};

const PostHeaderColumn = ({ heading, values }) => {
  return html`
    <div className="mb-5 pr-10">
      <span
        className="text-xxs tracking-widest opacity-75 text-tertiary-lighter uppercase font-bold"
        >${heading}</span
      >

      ${values.map(({ name }) => {
        return html`<p className="">${name}</p>`;
      })}
    </div>
  `;
};
