import { html } from "htm/preact";



export const HR = ({ title = 'Im a title'}) => {
  return html`
    <div className="border-t border-gray-500">
      <h4 className="uppercase tracking-widest text-primary text-xs mt-3">${title}</h4>
    </div>
  `;
};


