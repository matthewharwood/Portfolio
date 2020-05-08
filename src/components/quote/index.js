import { html } from "htm/preact";

export const Quote = ({
  hasBorder = false,
  quote,
  person,
  title,
  date,
}) => {
  return html`
    <section>
      <div
        className="container px-5 lg:px-16 py-16 lg:py-32 flex flex-col items-center"
      >
        <div className="w-full lg:w-1/2 flex flex-col">
          <p className="relative italic text-lg">“${quote}”</p>
          <div
            className="flex flex-col self-end text-xs justify-end text-right text-primary mt-5"
          >
            <span>${person}</span>
            <span>${title}</span>
            <span>${date}</span>
          </div>
        </div>
      </div>
      ${hasBorder &&
      html` <div className="container px-5 lg:px-16 w-full">
        <div className="h-px w-full bg-border"></div>
      </div>`}
    </section>
  `;
};
