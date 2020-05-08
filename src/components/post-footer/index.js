import { html } from "htm/preact";
import { socialLinks } from "./data";
import {AH} from '../component_map';




const PostFooter = () => {
  return html`
    <footer className="border border-gray-500 px-5 py-4 flex justify-between">
      <span>© MORNING HARWOOD <${AH.DateCounter} /></span>
      <div className="flex items-center">
        ${Object.entries(socialLinks)
          .slice(0, 5)
          .map(
            ([site, data]) => html`
              <a
                href="${data.src}"
                dangerouslySetInnerHTML="${{ __html: data.icon }}"
                className="h-5 w-5 ml-3"
                title="${site.toLowerCase()}"
              />
            `
          )}
        <button className="h-5 w-5 ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#333"
              d="M3 6c1.65 0 3-1.35 3-3S4.65 0 3 0 0 1.35 0 3s1.35 3 3 3zm0 3c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 9c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"
            />
          </svg>
        </button>
      </div>
      <${SlideUp} />
    </footer>
  `;
};

const SlideUp = ({ isVisible=false }) => {
  const display = isVisible ? 'block' : 'hidden';
  return html`
    <section
      className="${display} bg-gray-100 fixed inset-0 h-screen w-screen overflow-y-auto z-50 p-10"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Find me on Internet</h2>
        <div className="h-16 w-16 md:h-20 md:w-20 hover:bg-gray-300 rounded-full p-5 cursor-pointer">
        <svg
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.5 5.435L44.565 0.5L25 20.065L5.435 0.5L0.5 5.435L20.065 25L0.5 44.565L5.435 49.5L25 29.935L44.565 49.5L49.5 44.565L29.935 25L49.5 5.435Z"
            fill="#333333"
          />
          </svg>
        </div>
      </div>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-10 mt-10 px-10">
        ${Object.entries(socialLinks).map(
          ([site, data]) => html`
            <li className="my-10 mx-auto h-10 w-10">
              <a
                href="${data.src}"
                dangerouslySetInnerHTML="${{ __html: data.icon }}"
                className=""
                title="${site.toLowerCase()}"
              />
            </li>
          `
        )}
      </ul>
    </section>
  `;
};

export { PostFooter };
