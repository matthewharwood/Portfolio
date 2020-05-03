import { html } from "htm/preact";
import { AH } from "../../components/component_map";

export const WorkNikeJordanEditor = () => {
  return html`
    <div data-router-view="work">
      <${PostHeaderBlock} />
      <${SummaryBlock} />
      <${OutlineBlock} />
      <${HighlightBlock} />
      <${HighlightBoldBlock} />
      <${QuoteBlock} />
      <${HeadlineBlock} />
      <${HeadlineBlock} />
      <${CardTitleBlock} />
      <${VideoBlock} />
      <${StepsCardsBlock} />
      <${CardTilesBlock} />
    </div>
  `;
};

const PostHeaderBlock = () => {
  return html`
    <section className="bg-gray-800 text-gray-300 pt-64">
      <div className="container py-16">
        <div className="flex flex-col">
          <span className="text-red-600 uppercase font-bold"
            >Web Application</span
          >
          <h1 className="text-5xl">Nike Jordan Editor</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, at itaque? Tempore officiis quibusdam mollitia?
          </p>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 border-t border-gray-700 mt-5 pt-5"
        >
          <div className="flex flex-col">
            <${PostHeaderColumn} />
            <${PostHeaderColumn} />
          </div>
          <div className="flex flex-col">
            <${PostHeaderColumn} />
            <${PostHeaderColumn} />
          </div>
          <div className="flex flex-col">
            <${PostHeaderColumn} />
            <${PostHeaderColumn} />
          </div>
        </div>
      </div>
    </section>
  `;
};

const PostHeaderColumn = () => {
  return html`
    <div className="flex flex-col mb-5">
      <span className="text-sm text-gray-500 uppercase font-bold">Client</span>
      <span className="italic">Nike Jordan</span>
    </div>
  `;
};

const SummaryBlock = () => {
  return html`
    <section
      className="container border-b border-gray-400 py-16 grid grid-cols-3"
    >
      <div className="col-span-3 lg:col-span-2 flex flex-col">
        <span className="text-2xl text-red-500">00</span>
        <h2 className="text-5xl">Summary</h2>
        <p className="mt-5 leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          blanditiis autem voluptates, delectus earum molestias laborum repellat
          tenetur sapiente quas culpa accusantium suscipit esse in. Dolor
          eveniet laboriosam, atque ex nam excepturi ea cumque neque. Natus
          molestiae sequi dolores! Nesciunt excepturi voluptatem recusandae esse
          labore quisquam officia earum voluptas laudantium laboriosam hic atque
          veniam nobis doloribus repellat cupiditate, iusto facere saepe
          molestiae. Temporibus accusantium, quam autem suscipit cumque fugit
          molestias rerum? Ut, magni nostrum? Quis eos iusto dicta? Quibusdam,
          accusantium laboriosam asperiores beatae ipsam, nisi, mollitia
          voluptatum ratione assumenda id placeat omnis cum? Soluta amet alias
          commodi corporis molestiae assumenda?
        </p>
      </div>
      <div className="lg:row-start-2 col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        <${VideoCard} />
        <${VideoCard} />
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

const OutlineBlock = () => {
  return html`
    <section className="container grid grid-cols-12 py-16">
      <div className="col-span-12 lg:col-span-5 flex items-center lg:block lg:items-start mb-10 lg:mb-0">
        <h3 className="text-3xl uppercase flex-shrink-0">Process</h3>
        <div className="ml-5 w-full border-t border-b border-gray-600 lg:hidden"></div>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <ul>
          <${OutlineListItem} />
          <${OutlineListItem} />
          <${OutlineListItem} />
          <${OutlineListItem} />
          <${OutlineListItem} />
          <${OutlineListItem} />
          <${OutlineListItem} />
          <${OutlineListItem} />
          <${OutlineListItem} isLast="${true}" />
        </ul>
      </div>
    </section>
  `;
};

const OutlineListItem = ({ isLast = false }) => {
  const lineBelowClass = isLast ? "h-0" : "h-10";
  return html`
    <li className="flex flex-col justify-start">
      <div className="flex items-center">
        <div className="h-2 w-2 rounded-full bg-gray-500 mr-20"></div>
        <span className="font-bold uppercase text-gray-500 leading-none text-sm"
          >Getting started</span
        >
      </div>
      <div
        className="${lineBelowClass} ml-1 border-l border-dotted my-2 border-gray-500"
      ></div>
    </li>
  `;
};

const HighlightBlock = () => {
  return html`
    <section className="container grid grid-cols-12 gap-10 py-16">
      <div className="flex flex-col col-span-12 lg:col-span-6">
        <span className="text-2xl text-red-500">00</span>
        <h2 className="text-5xl">Getting Started</h2>
        <p className="mt-5 leading-loose">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem iure
          non mollitia, temporibus inventore nihil cumque nisi eveniet esse
          recusandae? Provident eaque asperiores veritatis natus autem, earum
          ratione iusto. Cum praesentium suscipit, numquam modi necessitatibus
          iste magnam corporis dolor alias.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <img
          src="https://via.placeholder.com/800x600"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  `;
};

const HighlightBoldBlock = () => {
  return html`
    <section className="bg-white py-16 px-5 lg:px-0">
      <div className="container grid grid-cols-12 gap-10 py-16 bg-gray-100">
        <div className="flex flex-col col-span-12 lg:col-span-6">
          <span className="text-2xl text-red-500">00</span>
          <h2 className="text-5xl">Proposed Solution</h2>
          <p className="mt-5 leading-loose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem iure
            non mollitia, temporibus inventore nihil cumque nisi eveniet esse
            recusandae? Provident eaque asperiores veritatis natus autem, earum
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <!-- <img src="https://via.placeholder.com/800x600" alt="" className="h-full w-full object-cover"/> -->
        </div>
      </div>
    </section>
  `;
};

const QuoteBlock = () => {
  return html`
    <section className="bg-gray-100 py-16 lg:py-32">
      <div className="container flex flex-col items-center">
        <div className="w-full lg:w-1/2 flex flex-col">
          <p className="relative italic text-lg">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            accusantium nam eaque natus beatae aperiam blanditiis libero.
            Ducimus, ex tenetur?"
          </p>
          <div
            className="flex flex-col self-end text-xs justify-end text-right text-gray-600 mt-5"
          >
            <span>Jimmy Soat</span>
            <span>Design Director</span>
            <span>February 2014</span>
          </div>
        </div>
      </div>
    </section>
  `;
};

const HeadlineBlock = () => {
  return html`
    <section className="bg-gray-100 py-8 lg:py-16">
      <div className="container grid grid-cols-3">
        <div className="col-span-3 lg:col-span-1">
          <h3 className="text-3xl uppercase">Challenge</h3>
        </div>
        <div className="col-span-3 lg:col-span-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          cupiditate nam possimus odit rerum aliquid nisi delectus culpa sint
          pariatur?
        </div>
      </div>
    </section>
  `;
};

const CardTitleBlock = () => {
  return html`
    <section className="bg-gray-100 py-16">
      <div className="container grid grid-cols-3">
        <div className="lg:col-start-2 col-span-3 lg:col-span-2">
          <${Card} />
          <${Card} />
        </div>
      </div>
    </section>
  `;
};

const Card = () => {
  return html`
    <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-start mb-10">
      <img
        src="https://via.placeholder.com/300"
        alt=""
        className="h-64 w-64 lg:mr-10 object-cover"
      />
      <div className="flex flex-col leading-loose mt-5">
        <h5 className="uppercase font-bold text-gray-600">Color Palette</h5>
        <span>Two Tone</span>
      </div>
    </div>
  `;
};

const VideoBlock = () => {
  return html`
    <section className="py-16 bg-gray-100">
      <div className="container grid grid-cols-3 gap-10">
        <div className="col-span-3 lg:col-span-2">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            className="h-full w-full"
            controls
          ></video>
        </div>
        <div className="col-span-3 lg:col-span-1 flex flex-col">
          <h5 className="font-bold uppercase text-gray-600">
            Making a Project
          </h5>
          <p className="mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
            pariatur. Ipsam veritatis inventore pariatur nulla nihil rem
            temporibus. Sed, consequatur?
          </p>
        </div>
      </div>
    </section>
  `;
};

const StepsCardsBlock = () => {
  return html`
    <section className="bg-gray-100 py-16">
      <div className="container grid grid-cols-3">
        <div className="lg:col-start-2 col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <${StepCard} />
          <${StepCard} />
          <${StepCard} />
          <${StepCard} />
          <${StepCard} />
          <${StepCard} />
        </div>
      </div>
    </section>
  `;
};

const StepCard = () => {
  return html`
    <div
      className="bg-gray-200 grid grid-cols-4 gap-10 p-5 border-t-4 border-red-500 shadow"
    >
      <div className="col-span-1">
        <img src="https://via.placeholder.com/100" alt="" />
      </div>
      <div className="col-span-3 flex flex-col">
        <h5 className="font-bold uppercase text-gray-600">1. Heading</h5>
        <span className="uppercase text-xs text-gray-600">Lorem ipsum</span>
      </div>
    </div>
  `;
};

const CardTilesBlock = () => {
  return html`
    <section className="bg-gray-100 py-16">
      <div className="container grid grid-cols-3">
        <div className="lg:col-start-2 col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <${CardTile} />
          <${CardTile} />
        </div>
      </div>
    </section>
  `;
};

const CardTile = () => {
  return html`
    <div
      className="bg-gray-200 grid grid-cols-4 gap-10 p-5 border-t-4 border-red-500 shadow"
    >
      <div className="col-span-1">
        <img src="https://via.placeholder.com/100" alt="" />
      </div>
      <div className="col-span-3 flex flex-col">
        <h5 className="font-bold uppercase text-gray-600">1. Heading</h5>
        <span className="uppercase text-xs text-gray-600">Lorem ipsum</span>
      </div>
      <p className="col-span-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        consectetur, corporis quos accusantium nesciunt iste, similique deserunt
        amet ipsam maiores debitis beatae sapiente tenetur autem earum culpa
        nobis iusto a!
      </p>
    </div>
  `;
};
