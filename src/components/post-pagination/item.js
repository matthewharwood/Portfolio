import { html } from "htm/preact";

export const PostPaginationItem = () => {
  return html`
    <div className="flex flex-col mb-10">
      <img src="https://via.placeholder.com/640x360" className="w-full object-contain object-center bg-secondary-lighter" />
      <span className="mt-3 font-bold">Marketing Pathfinder</span>
    </div>
  `;
};


