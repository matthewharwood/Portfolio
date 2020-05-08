import { html } from "htm/preact";

export const VideoBlock = ({ videoSrc, title, text }) => {
  return html`
    <section className="py-16">
      <div className="container sm:px-5 lg:px-16 grid grid-cols-3 gap-10">
        <div className="col-span-3 lg:col-span-2">
          <video src="${videoSrc}" className="h-full w-full" controls></video>
        </div>
        <div className="col-span-3 lg:col-span-1 flex flex-col px-5 sm:px-0">
          <h5 className="font-bold uppercase text-primary-lighter">${title}</h5>
          <p className="mt-5">${text}</p>
        </div>
      </div>
    </section>
  `;
};


