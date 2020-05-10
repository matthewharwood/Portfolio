import { html } from "htm/preact";

export const SummaryCard = ({ heading="Fusion.js", list=["one", "two", "three"] }) => {
  return html`
    <div style="padding-bottom:100%" className="relative">
      <div className="absolute inset-0 border border-primary p-4 flex flex-col text-sm">
      <h6 className="mt-2 mb-4 text-lg font-mono font-bold">${heading}</h6>
        <ul>
    ${list.map(
      (listItem) => html`
          <li className="flex items-center mb-2">
          <img src="https://via.placeholder.com/50" alt="" className="h-4 w-4"/>
          <span className="ml-2">${listItem}</span>
      </li>
      `
        )}
          </ul>
      <a href="#" className="mt-auto bg-primary text-secondary font-mono w-full py-2 text-center" aria-label="${heading}">Learn More</a>
    </div>
    </div>
  `;
};
