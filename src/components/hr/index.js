import { html } from "htm/preact";



export const HR = ({ title = 'Im a title', omitMargin}) => {
  const margin = omitMargin ? '' : 'lg:px-16';
  return html`
    <section
      className="container ${margin} grid grid-cols-1 lg:gap-10 py-24"
    >
      <div className="border-t border-gray-500">
        <h4 className="uppercase tracking-widest text-primary text-xs mt-3">${title}</h4>
      </div>
    </section>
  `;
};


