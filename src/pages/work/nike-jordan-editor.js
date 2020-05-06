import { html } from "htm/preact";
import { AH } from "../../components/component_map";
import { data } from './nike-jordan-data'

const BG_COLOR = "bg-gray-100";

export const WorkNikeJordanEditor = () => {
  return html`
    <div data-router-view="work">
      <${PostHeaderBlock} ...${data.postHeaderBlockData} />
      <${SummaryBlock} ...${data.summaryBlockData} />
      <${OutlineBlock} ...${data.outlineBlockData} />
      <${HighlightBlock} ...${data.highlightBlockDataOne} />
      <${HighlightBlock} ...${data.highlightBlockDataTwo} />
      <${HighlightBoldBlock} ...${data.highlightBoldBlockData} />
      <${SummaryBlock} ...${data.summaryBlockDataTwo} />
      <${QuoteBlock} ...${data.quoteBlockData} />
      <${HeadlineBlock} ...${data.headlineBlockData} />
      <${HeadlineBlock} ...${data.headlineBlockDataTwo} />
      <${CardTileBlock} ...${data.cardTileBlockData} />
      <${HeadlineBlock} ...${data.headlineBlockDataThree} />
      <${VideoBlock} ...${data.videoBlockData} />
      <${VideoBlock} ...${data.videoBlockDataTwo} />
      <${VideoBlock} ...${data.videoBlockDataThree} />
      <${VideoBlock} ...${data.videoBlockDataFour} />
      <${VideoBlock} ...${data.videoBlockDataFive} />
      <${SummaryBlock} ...${data.summaryBlockDataThree} />
      <${QuoteBlock} ...${data.quoteBlockDataTwo} />
      <${HeadlineBlock} ...${data.headlineBlockDataFour} />
      <${HeadlineBlock} ...${data.headlineBlockDataFive} />
      <${StepsCardsBlock} ...${data.stepCardsBlockData} />
      <${HeadlineBlock} ...${data.headlineBlockDataSix} />
      <${HeadlineBlock} ...${data.headlineBlockDataSeven} />
      <${HeadlineBlock} ...${data.headlineBlockDataEight} />
      <${CardTilesBlock} ...${data.cardTilesTwoData} />
      <${HeadlineBlock} ...${data.headlineBlockDataNine} />
      <${HeadlineBlock} ...${data.headlineBlockDataTen} />
      <${HeadlineBlock} ...${data.headlineBlockDataEleven} />
      <${CardTilesBlock} ...${data.cardTilesTwoDataNodeWebkit} />
      <${HeadlineBlock} ...${data.headlineBlockDataTwelve} />
      <${HighlightBlock} ...${data.highlightBlockDataThree} />
      <${HighlightBlock} ...${data.highlightBlockDataFour} />
      <${HighlightBoldBlock} ...${data.highlightBoldBlockDataTwo} />
      <${HighlightBlock} ...${data.highlightBlockDataFive} />
    </div>
  `;
};

const PostHeaderBlock = ({ heading, description, subtext, info }) => {
  return html`
    <section className="bg-gray-800 text-gray-300 pt-12">
      <div className="container px-5 lg:px-16 py-16">
        <div className="flex flex-col">
          <span className="text-red-600 uppercase font-bold">
            ${subtext}
          </span>
          <h1 className="text-5xl">${heading}</h1>
          <p className="text-xl">${description}</p>
        </div>
        <div
          className="grid grid-flow-col grid-cols-1 lg:grid-cols-3 grid-rows-2 border-t border-gray-700 mt-5 pt-5"
        >
          ${info.map(
            (infoItem) => html` <${PostHeaderColumn} ...${infoItem} /> `
          )}
        </div>
      </div>
    </section>
  `;
};

const PostHeaderColumn = ({ heading, text }) => {
  return html`
    <div className="flex flex-col mb-5">
      <span className="text-sm text-gray-500 uppercase font-bold"
        >${heading}</span
      >
      <span className="italic">${text}</span>
    </div>
  `;
};

const SummaryBlock = ({
  hasBackground = false,
  number,
  heading,
  text,
  hasBorder = false,
}) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass} flex flex-col items-center">
      <div className="container py-16 px-5 lg:px-16 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2 flex flex-col">
          <span className="text-2xl text-red-500">${number}</span>
          <h2 className="text-5xl">${heading}</h2>
          <p className="mt-5 leading-loose">${text}</p>
        </div>
        <div
          className="hidden lg:row-start-2 col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16"
        >
          <${VideoCard} />
          <${VideoCard} />
        </div>
      </div>
      ${hasBorder && html`<${Border}/>` }
    </section>
  `;
};

const Border = () => {
  return html`
        <div className="container px-5 lg:px-16 w-full">
          <div className="h-px w-full bg-gray-400"></div>
        </div>
  `
}

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

const OutlineBlock = ({ hasBackground, title, steps }) => {
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

const HighlightBlock = ({
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
    <section
      className="container px-5 lg:px-16 grid grid-cols-12 lg:gap-10 py-16"
    >
      <div className="flex flex-col col-span-12 ${textColsClass}">
        <span className="text-2xl text-red-500">${subtitle}</span>
        <h2 className="text-5xl">${title}</h2>
        <p className="mt-5 leading-loose">${text}</p>
      </div>
      <div className="col-span-12 ${imageOrder} ${imageColsClass}">
        <img src="${image}" alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  `;
};

const HighlightBoldBlock = ({
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
        className="container px-5 lg:px-16 grid grid-cols-12 lg:gap-10 py-16 bg-gray-100"
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

const QuoteBlock = ({ hasBackground, hasBorder=false, quote, person, title, date }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass}">
      <div className="container px-5 lg:px-16 py-16 lg:py-32 flex flex-col items-center">
        <div className="w-full lg:w-1/2 flex flex-col">
          <p className="relative italic text-lg">“${quote}”</p>
          <div
            className="flex flex-col self-end text-xs justify-end text-right text-gray-600 mt-5"
          >
            <span>${person}</span>
            <span>${title}</span>
            <span>${date}</span>
          </div>
        </div>
      </div>
      ${hasBorder && html`<${Border}/>` }
    </section>
  `;
};

const HeadlineBlock = ({ hasBackground, hasBorder=false, title, text }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass}">
      <div className="container px-5 lg:px-16 py-8 lg:py-16 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-1">
          <h3 className="text-3xl uppercase">${title}</h3>
        </div>
        <div className="col-span-3 lg:col-span-2">${text}</div>
      </div>
      ${hasBorder && html`<${Border}/>` }
    </section>
  `;
};

const CardTileBlock = ({ hasBackground, cards }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass} py-16">
      <div className="container px-5 lg:px-16 grid grid-cols-3">
        <div className="lg:col-start-2 col-span-3 lg:col-span-2">
          ${cards.map((card) => html` <${Card} data="${card}" /> `)}
        </div>
      </div>
    </section>
  `;
};

const Card = ({ data }) => {
  return html`
    <div
      className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-start mb-10"
    >
      <img
        src="${data.image}"
        alt=""
        className="h-64 w-64 lg:mr-10 object-cover"
      />
      <div
        className="flex flex-col leading-loose mt-5 items-center lg:items-start"
      >
        <h5 className="uppercase font-bold text-gray-600">${data.title}</h5>
        <span>${data.subtitle}</span>
      </div>
    </div>
  `;
};

const VideoBlock = ({ hasBackground, videoSrc, title, text }) => {
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

const StepsCardsBlock = ({ hasBackground, steps }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  const colorsArray = [
    "teal-400",
    "red-400",
    "blue-400",
    "green-400",
    "yellow-400",
    "orange-400",
  ];
  const categories = [...new Set(steps.map((step) => step.category))];
  const categoryData = categories.map((category) => ({
    name: category,
    cards: steps.filter((step) => step.category === category),
  }));
  return html`
    <section className="${bgClass} py-16">
      <div className="container sm:px-5 lg:px-16 grid grid-cols-3">
        <div
          className="lg:col-start-2 col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          ${categoryData.map(
            (category, index) => html`
              <div className="grid grid-cols-1 gap-5 lg:gap-10">
                <${StepLabel}
                  name="${category.name}"
                  color="${colorsArray[index]}"
                  mobileOnly="${true}"
                />
                ${category.cards.map(
                  (card) => html`
                    <${StepCard} data="${card}" color="${colorsArray[index]}" />
                  `
                )}
              </div>
            `
          )}
        </div>
        <div className="hidden lg:flex col-start-2 col-span-2 justify-end mt-5">
          ${categories.map(
            (category, index) =>
              html`<${StepLabel}
                name="${category}"
                color="${colorsArray[index]}"
              />`
          )}
        </div>
      </div>
    </section>
  `;
};

const StepCard = ({ data, color }) => {
  const borderColor = `border-${color}`;
  return html`
    <div
      className="bg-gray-200 grid grid-cols-4 gap-10 p-5 border-t-4 ${borderColor} shadow"
    >
      <div className="col-span-1">
        <img src="${data.image}" alt="" />
      </div>
      <div className="col-span-3 flex flex-col">
        <h5 className="font-bold uppercase text-gray-600">${data.title}</h5>
        <span className="uppercase text-xs text-gray-600"
          >${data.subtitle}</span
        >
      </div>
    </div>
  `;
};

const StepLabel = ({
  name = "test",
  color = "red-400",
  mobileOnly = false,
}) => {
  const backgroundColor = `bg-${color}`;
  const display = mobileOnly ? "flex lg:hidden" : "flex";
  return html`
    <div className="${display} items-center ml-5">
      <div className="h-5 w-5 ${backgroundColor} mr-3" />
      <span className="text-gray-600 uppercase text-sm">${name}</span>
    </div>
  `;
};

const CardTilesBlock = ({ hasBackground, cards }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass} py-5">
      <div className="container sm:px-5 lg:px-16 grid grid-cols-3">
        <div
          className="lg:col-start-2 col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          ${cards.map((card) => html` <${CardTile} data="${card}" /> `)}
        </div>
      </div>
    </section>
  `;
};

const CardTile = ({ data }) => {
  return html`
    <div className="bg-gray-200 grid grid-cols-4 gap-10 p-5 shadow">
      <div className="col-span-1">
        <img src="${data.image}" alt="" />
      </div>
      <div className="col-span-3 flex flex-col">
        <h5 className="font-bold uppercase text-gray-600">${data.title}</h5>
        <span className="uppercase text-xs text-gray-600"
          >${data.subtitle}</span
        >
      </div>
      <p className="col-span-4">${data.text}</p>
    </div>
  `;
};
