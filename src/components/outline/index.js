import { html } from "htm/preact";
const BG_COLOR = "bg-gray-100";

export const Outline = ({ hasBackground, title, steps }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="py-16 ${bgClass}">
      <div className="container px-5 lg:px-16 grid grid-cols-12">
        <div
          className="col-span-12 lg:col-span-5 flex items-center lg:block lg:items-start mb-10 lg:mb-0"
        >
          <h3 className="text-3xl uppercase flex-shrink-0">${title}</h3>
          <div
            className="ml-5 w-full border-t border-b border-gray-600 lg:hidden"
          ></div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <ul>
            ${steps.map(
              (step, index) => html`
                <${OutlineListItem}
                  text="${step}"
                  isLast="${index === steps.length - 1}"
                />
              `
            )}
          </ul>
        </div>
      </div>
    </section>
  `;
};

const OutlineListItem = ({ text, isLast = false }) => {
  const lineBelowClass = isLast ? "h-0" : "h-10";
  return html`
    <li className="flex flex-col justify-start">
      <div className="flex items-center">
        <div className="h-2 w-2 rounded-full bg-gray-500 mr-20"></div>
        <span
          className="font-bold uppercase text-gray-500 leading-none text-sm"
        >
          ${text}
        </span>
      </div>
      <div
        className="${lineBelowClass} ml-1 border-l border-dotted my-2 border-gray-500"
      ></div>
    </li>
  `;
};

