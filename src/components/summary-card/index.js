import { html } from "htm/preact";

export const SummaryCard = () => {
  return html`
    <div className="border border-primary p-4 flex flex-col text-sm">
      <h6 className="mt-2 mb-4 text-lg font-mono font-bold">Fusion.js</h6>
      <ul>
        ${[1, 2, 3, 4].map(
          (point) => html`
            <li className="flex items-center mb-2">
              <img src="https://via.placeholder.com/50" alt="" className="h-4 w-4"/>
              <span className="ml-2">Isomorphic Framework</span>
            </li>
          `
        )}
      </ul>
        <a href="#" className="mt-4 bg-primary text-secondary font-mono w-full py-2 text-center">Learn More</a>
    </div>
  `;
};
