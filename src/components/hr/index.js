import { html } from "htm/preact";



export const HR = ({ title = 'Im a title'}) => {
  return html`
    <div>
      ${title}
    </div>
  `;
};


