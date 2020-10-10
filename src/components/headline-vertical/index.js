import { html } from "htm/preact";

export const HeadlineVertical = ({
  title = "This is a test title.",
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolor fugit? Officiis, unde eos minus delectus error modi cumque asperiores.",
  gridColsDesktop = 7
}) => {
  const gridColSpan = gridColsDesktop >= 12 ? "lg:col-span-12" : `lg:col-span-${gridColsDesktop}`;
  return html`
    <div className="px-5 lg:px-16 container grid grid-cols-12">
      <div className="col-span-12 ${gridColSpan}">
        ${title && html`<h1 className="font-mono text-4xl leading-loose">${title}</h1>`}
        ${text && html`<p className="text-lg">${text}</p> `}
      </div>
    </div>
  `;
};
