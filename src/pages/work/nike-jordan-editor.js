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
    </div>
  `;
};

const PostHeaderBlock = () => {
  return html`
    <section className="bg-gray-800 text-gray-300">
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
        <div className="grid grid-cols-3 border-t border-gray-700 mt-5 pt-5">
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
    <section className="container border-b border-gray-400 py-16">
      <div className="flex flex-col w-2/3">
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
      <div className="w-2/3 grid grid-cols-2 gap-10 mt-16">
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
    <section className="container flex py-16">
      <div className="w-5/12">
        <h3 className="text-3xl uppercase">Process</h3>
      </div>
      <div className="w-7/12">
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
      <div className="flex flex-col col-span-6">
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
      <div className="col-span-6">
        <img src="https://via.placeholder.com/800x600" alt="" className="h-full w-full object-cover"/>
      </div>
    </section>
  `;
};

const HighlightBoldBlock = () => {
  return html`
    <section className="container grid grid-cols-12 gap-10 py-16 bg-gray-100">
      <div className="flex flex-col col-span-6">
        <span className="text-2xl text-red-500">00</span>
        <h2 className="text-5xl">Proposed Solution</h2>
        <p className="mt-5 leading-loose">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem iure
          non mollitia, temporibus inventore nihil cumque nisi eveniet esse
          recusandae? Provident eaque asperiores veritatis natus autem, earum
        </p>
      </div>
      <div className="col-span-6">
        <!-- <img src="https://via.placeholder.com/800x600" alt="" className="h-full w-full object-cover"/> -->
      </div>
    </section>
  `;
};
