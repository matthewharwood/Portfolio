import { html } from "htm/preact";
const BG_COLOR = "bg-gray-100";

export const VideoBlock = ({ hasBackground, videoSrc, title, text }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="py-16 ${bgClass}">
      <div className="container sm:px-5 lg:px-16 grid grid-cols-3 gap-10">
        <div className="col-span-3 lg:col-span-2">
          <video src="${videoSrc}" className="h-full w-full" controls></video>
        </div>
        <div className="col-span-3 lg:col-span-1 flex flex-col px-5 sm:px-0">
          <h5 className="font-bold uppercase text-gray-600">${title}</h5>
          <p className="mt-5">${text}</p>
        </div>
      </div>
    </section>
  `;
};


