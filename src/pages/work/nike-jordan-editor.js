import { html } from "htm/preact";
import { AH } from "../../components/component_map";

const BG_COLOR = "bg-gray-100"

export const WorkNikeJordanEditor = () => {
  const postHeaderBlockData = {
    heading: "Nike Jordan Editor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id laudantium explicabo repellendus magnam laborum quae totam ut debitis. At?",
    subtext: "Web Application",
    info: [
      {
        heading: "Client",
        text: "Nike Jordan",
      },
      {
        heading: "Client",
        text: "Nike Jordan",
      },
      {
        heading: "Client",
        text: "Nike Jordan",
      },
      {
        heading: "Client",
        text: "Nike Jordan",
      },
      {
        heading: "Client",
        text: "Nike Jordan",
      },
      {
        heading: "Client",
        text: "Nike Jordan",
      },
    ],
  };
  const summaryBlockData = {
    number: "00",
    heading: "Summary",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis autem voluptates, delectus earum molestias laborum repellat tenetur sapiente quas culpa accusantium suscipit esse in. Dolor eveniet laboriosam, atque ex nam excepturi ea cumque neque. Natus molestiae sequi dolores! Nesciunt excepturi voluptatem recusandae esse labore quisquam officia earum voluptas laudantium laboriosam hic atque veniam nobis doloribus repellat cupiditate, iusto facere saepe molestiae. Temporibus accusantium, quam autem suscipit cumque fugit molestias rerum? Ut, magni nostrum? Quis eos iusto dicta? Quibusdam, accusantium laboriosam asperiores beatae ipsam, nisi, mollitia voluptatum ratione assumenda id placeat omnis cum? Soluta amet alias commodi corporis molestiae assumenda?",
    hasBackground: false,
  };
  const outlineBlockData = {
    title: "process",
    steps: ["one", "two", "three", "four", "five"],
    hasBackground: false,
  };
  const highlightBlockData = {
    subtitle: "00",
    title: "Getting started",
    text: "lorem ipsum dolor sit amet",
    image: "https://via.placeholder.com/800x600",
  };
  const highlightBoldBlockData = {
    subtitle: "00",
    title: "Getting started",
    text: "lorem ipsum dolor sit amet",
    image: "https://via.placeholder.com/800x600",
    hasBackground: true,
  };
  const quoteBlockData = {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium nam eaque natus beatae aperiam blanditiis libero. Ducimus, ex tenetur?",
    person: "Jimmy Soat",
    title: "Design Director",
    date: "February 2014",
    hasBackground: true,
  };
  const headlineBlockData = {
    title: "Challenge",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo cupiditate nam possimus odit rerum aliquid nisi delectus culpa sint pariatur?",
    hasBackground: true,
  };
  const cardTileBlockData = {
    cards: [
      {
        title: "Color Palette",
        subtitle: "Two Tone",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "Another Title",
        subtitle: "Two Tone",
        image: "https://via.placeholder.com/300",
      },
    ],
    hasBackground: true,
  };
  const videoBlockData = {
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Making a Project",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, pariatur. Ipsam veritatis inventore pariatur nulla nihil rem temporibus. Sed, consequatur?",
    hasBackground: true,
  };
  const stepCardsBlockData = {
    steps: [
      {
        title: "Heading",
        subtitle: "lorem ipsum",
        image: "https://via.placeholder.com/100",
      },
      {
        title: "Heading",
        subtitle: "lorem ipsum",
        image: "https://via.placeholder.com/100",
      },
      {
        title: "Heading",
        subtitle: "lorem ipsum",
        image: "https://via.placeholder.com/100",
      },
      {
        title: "Heading",
        subtitle: "lorem ipsum",
        image: "https://via.placeholder.com/100",
      },
      {
        title: "Heading",
        subtitle: "lorem ipsum",
        image: "https://via.placeholder.com/100",
      },
      {
        title: "Heading",
        subtitle: "lorem ipsum",
        image: "https://via.placeholder.com/100",
      },
    ],
    hasBackground: true,
  };
  const cardTilesTwoData = {
    cards: [
      {
        title: "Color Palette",
        subtitle: "Two Tone",
        image: "https://via.placeholder.com/300",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia consectetur, corporis quos accusantium nesciunt iste, similique deserunt amet ipsam maiores debitis beatae sapiente tenetur autem earum culpa nobis iusto a!",
      },
      {
        title: "Another Title",
        subtitle: "Two Tone",
        image: "https://via.placeholder.com/300",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia consectetur, corporis quos accusantium nesciunt iste, similique deserunt amet ipsam maiores debitis beatae sapiente tenetur autem earum culpa nobis iusto a!",
      },
    ],
    hasBackground: true,
  };
  return html`
    <div data-router-view="work">
      <${PostHeaderBlock} ...${postHeaderBlockData} />
      <${SummaryBlock} ...${summaryBlockData} />
      <${OutlineBlock} ...${outlineBlockData} />
      <${HighlightBlock} ...${highlightBlockData} />
      <${HighlightBoldBlock} ...${highlightBoldBlockData} />
      <${QuoteBlock} ...${quoteBlockData} />
      <${HeadlineBlock} ...${headlineBlockData} />
      <${HeadlineBlock} ...${headlineBlockData} />
      <${CardTileBlock} ...${cardTileBlockData} />
      <${VideoBlock} ...${videoBlockData} />
      <${StepsCardsBlock} ...${stepCardsBlockData} />
      <${CardTilesBlock} ...${cardTilesTwoData} />
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
          className="grid grid-cols-1 lg:grid-cols-3 border-t border-gray-700 mt-5 pt-5"
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

const SummaryBlock = ({ hasBackground, number, heading, text }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="border-b border-gray-400 py-16 ${bgClass}">
      <div className="container px-5 lg:px-16 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2 flex flex-col">
          <span className="text-2xl text-red-500">${number}</span>
          <h2 className="text-5xl">${heading}</h2>
          <p className="mt-5 leading-loose">${text}</p>
        </div>
        <div
          className="lg:row-start-2 col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16"
        >
          <${VideoCard} />
          <${VideoCard} />
        </div>
      </div>
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

const HighlightBlock = ({ subtitle, title, text, image }) => {
  return html`
    <section
      className="container px-5 lg:px-16 grid grid-cols-12 lg:gap-10 py-16"
    >
      <div className="flex flex-col col-span-12 lg:col-span-6">
        <span className="text-2xl text-red-500">${subtitle}</span>
        <h2 className="text-5xl">${title}</h2>
        <p className="mt-5 leading-loose">${text}</p>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <img src="${image}" alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  `;
};

const HighlightBoldBlock = ({ subtitle, title, text, image }) => {
  return html`
    <section className="bg-white py-16 px-5 lg:px-0">
      <div
        className="container px-5 lg:px-16 grid grid-cols-12 lg:gap-10 py-16 bg-gray-100"
      >
        <div className="flex flex-col col-span-12 lg:col-span-6">
          <span className="text-2xl text-red-500">${subtitle}</span>
          <h2 className="text-5xl">${title}</h2>
          <p className="mt-5 leading-loose">${text}</p>
        </div>
        <div className="col-span-12 lg:col-span-6">
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

const QuoteBlock = ({ hasBackground, quote, person, title, date }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass} py-16 lg:py-32">
      <div className="container px-5 lg:px-16 flex flex-col items-center">
        <div className="w-full lg:w-1/2 flex flex-col">
          <p className="relative italic text-lg">"${quote}"</p>
          <div
            className="flex flex-col self-end text-xs justify-end text-right text-gray-600 mt-5"
          >
            <span>${person}</span>
            <span>${title}</span>
            <span>${date}</span>
          </div>
        </div>
      </div>
    </section>
  `;
};

const HeadlineBlock = ({ hasBackground, title, text }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass} py-8 lg:py-16">
      <div className="container px-5 lg:px-16 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-1">
          <h3 className="text-3xl uppercase">${title}</h3>
        </div>
        <div className="col-span-3 lg:col-span-2">${text}</div>
      </div>
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
      <div className="flex flex-col leading-loose mt-5">
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
  return html`
    <section className="${bgClass} py-16">
      <div className="container sm:px-5 lg:px-16 grid grid-cols-3">
        <div
          className="lg:col-start-2 col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          ${steps.map((step) => html` <${StepCard} data="${step}" /> `)}
        </div>
      </div>
    </section>
  `;
};

const StepCard = ({ data }) => {
  return html`
    <div
      className="bg-gray-200 grid grid-cols-4 gap-10 p-5 border-t-4 border-red-500 shadow"
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

const CardTilesBlock = ({ hasBackground, cards }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  return html`
    <section className="${bgClass} py-16">
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
    <div
      className="bg-gray-200 grid grid-cols-4 gap-10 p-5 border-t-4 border-red-500 shadow"
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
      <p className="col-span-4">${data.text}</p>
    </div>
  `;
};
