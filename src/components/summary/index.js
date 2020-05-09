import { html } from "htm/preact";
import { SummaryCard } from "../summary-card"

export const Summary = ({
  hasBackground = false,
  number,
  heading,
  text,
  hasBorder = false,
}) => {
  return html`
    <section className="flex flex-col items-center">
      <div className="container py-16 px-5 lg:px-16 grid grid-cols-6">
        <div className="col-span-6 lg:col-span-5 flex flex-col">
          <span className="text-2xl text-accent">${number}</span>
          <h2 className="text-5xl">${heading}</h2>
          <p className="mt-5 leading-loose">${text}</p>
        </div>
        <div
          className="hidden lg:row-start-2 col-span-6 lg:col-span-5 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16"
        >
          <${VideoCard} />
          <${VideoCard} />
        </div>
        <div
          className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16"
        >
          <${SummaryCard} />
          <${SummaryCard} />
          <${SummaryCard} />
          <${SummaryCard} />
          <${SummaryCard} />
          <${SummaryCard} />
        </div>
      </div>
      ${hasBorder &&
      html` <div className="container px-5 lg:px-16 w-full">
        <div className="h-px w-full bg-border"></div>
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
        <h5 className="font-bold uppercase text-tertiary mt-2">Demo Video</h5>
      </div>
      <div
        className="flex justify-center items-center absolute inset-0 bg-transparent"
      >
        >
      </div>
    </div>
  `;
};
