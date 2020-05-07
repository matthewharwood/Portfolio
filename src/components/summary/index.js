import { html } from "htm/preact";
const BG_COLOR = "bg-gray-100";

export const Summary = ({
  hasBackground = false,
  number,
  heading,
  text,
  hasBorder = false,
}) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass} flex flex-col items-center">
      <div className="container py-16 px-5 lg:px-16 grid grid-cols-6">
        <div className="col-span-6 lg:col-span-5 flex flex-col">
          <span className="text-2xl text-red-500">${number}</span>
          <h2 className="text-5xl">${heading}</h2>
          <p className="mt-5 leading-loose">${text}</p>
        </div>
        <div
          className="hidden lg:row-start-2 col-span-6 lg:col-span-5 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16"
        >
          <${VideoCard} />
          <${VideoCard} />
        </div>
      </div>
      ${hasBorder &&
      html` <div className="container px-5 lg:px-16 w-full">
        <div className="h-px w-full bg-gray-400"></div>
      </div>`}
    </section>
  `;
};

const VideoCard = () => {
  return html`
    <div className="w-full relative">
      <div className="relative">
        <img
          src="https://via.placeholder.com/480x360"
          alt=""
          className="h-64 w-full object-cover"
        />
        <h5 className="font-bold uppercase text-gray-600 mt-2">Demo Video</h5>
      </div>
      <div
        className="flex justify-center items-center absolute inset-0 bg-transparent"
      >
        >
      </div>
    </div>
  `;
};
