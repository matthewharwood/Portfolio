import { html } from "htm/preact";
import {MediaNew} from '../media/media';

export const CategoryCards = ({ categories, subtitle, title }) => {
  return html`
    <div className="bg-gray-100">
      <section className="container py-4 px-5 lg:px-16">
        ${categories.map(category => html`
          <${CategoryLine} ...${category} />
        `)}
      </section>
    </div>
  `
}

const CategoryLine = ({ title, cards }) => {
  return html`
    <div className="grid grid-cols-12 gap-4 my-8 lg:my-4 relative h-48 md:h-auto">
      <div className="col-span-2 md:col-span-12 lg:col-span-2 flex flex-col font-mono text-sm uppercase relative py-5">
        <div className="absolute top-0 left-0 w-5 h-px bg-black"></div>
        <span className="text-xs w-1/2">${title}</span>
      </div>
      <div className="hidden md:grid grid-cols-12 gap-4 md:col-span-12 lg:col-span-10 xl:col-span-8 items-start">
        ${cards.map(card => html`
          <div className="col-span-3 bg-white">
            <${Card} ...${card}/>
          </div>
        `)}
      </div>
      <div className="md:hidden col-span-12 items-start flex overflow-x-auto absolute left-0 right-0 pl-48">
        ${cards.map(card => html`
          <div className="w-40 bg-white flex-shrink-0 mr-5">
            <${Card} ...${card}/>
          </div>
        `)}
      </div>
    </div>
  `
}

const Card = ({ title, tags }) => {
  return html`
    <div className="h-0 relative overflow-hidden aspect-ratio-square">
      <div className="flex flex-col p-4 absolute inset-0">
        <h3 className="font-mono text-sm xl:text-base">${title}</h3>
        <ul className="flex flex-col mt-4">
          ${tags.map(tag => html`
            <li className="flex items-center mb-1">
              <${MediaNew} ...${tag} extension="${'.svg'}" classNames="h-4 w-4 mr-2"/>
              <span className="text-xs ml-2">${tag.alt}</span>
            </li>
          `)}
        </ul>
      </div>
    </div>
  `
}
