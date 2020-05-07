import { html } from "htm/preact";
const BG_COLOR = "bg-gray-100";

export const HighlightBold= ({
  isImageRight,
  imageCols = 6,
  subtitle,
  title,
  text,
  image,
}) => {
  const imageOrder = isImageRight ? "order-last" : "order-first";
  const imageColsClass = `lg:col-span-${imageCols}`;
  const textColsClass = `lg:col-span-${12 - imageCols}`;
  return html`
    <section className="bg-white py-16 px-5 lg:px-0">
      <div
        className="container px-5 lg:px-16 grid grid-cols-12 lg:gap-10 py-16 ${BG_COLOR}"
      >
        <div className="flex flex-col col-span-12 ${textColsClass}">
          <span className="text-2xl text-red-500">${subtitle}</span>
          <h2 className="text-5xl">${title}</h2>
          <p className="mt-5 leading-loose">${text}</p>
        </div>
        <div className="col-span-12 ${imageOrder} ${imageColsClass}">
          ${image &&
          html`
            <img
              src="https://via.placeholder.com/800x600"
              alt=""
              className="h-full w-full object-cover"
            />
          `}
        </div>
      </div>
    </section>
  `;
};

