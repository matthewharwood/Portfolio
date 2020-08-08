import { html } from "htm/preact";

export const HighlightBold= ({
  number,
  title,
  text,
}) => {
  return html`
    <section className="py-16 px-5 lg:px-0">
      <div
        className="container px-5 lg:px-16 grid grid-cols-12 lg:gap-10 py-16"
      >
        <div className="flex flex-col col-span-8">
          <span className="text-2xl text-accent font-mono">${number}</span>
          <h2 className="text-5xl font-mono">${title}</h2>
          <p className="mt-5 leading-loose">${text}</p>
        </div>
      </div>
    </section>
  `;
};

