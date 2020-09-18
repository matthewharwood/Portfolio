import { html } from "htm/preact";
import {Image} from '../media';

export const CategoryCards = () => {
  return html`
    <section className="container py-4 px-5 lg:px-16">
      ${[1,2,3,4].map(category => html`
        <${CategoryLine}/>
      `)}
    </section>
  `
}

const CategoryLine = () => {
  return html`
    <div className="grid grid-cols-12 gap-4 my-8 lg:my-4 relative h-48 md:h-auto">
      <div className="col-span-2 md:col-span-12 lg:col-span-2 flex flex-col font-mono text-sm uppercase relative py-5">
        <div className="absolute top-0 left-0 w-5 h-px bg-black"></div>
        <span className="text-xs w-1/2">Programming Languages</span>
      </div>
      <div className="hidden md:grid grid-cols-12 gap-4 md:col-span-12 lg:col-span-10 xl:col-span-8 items-start">
        ${[1,2,3,4].map(categoryCard => html`
          <div className="col-span-3 bg-white">
            <${Card}/>
          </div>
        `)}
      </div>
      <div className="md:hidden col-span-12 items-start flex overflow-x-auto absolute left-0 right-0 pl-48">
        ${[1,2,3,4].map(categoryCard => html`
          <div className="w-40 bg-white flex-shrink-0 mr-5">
            <${Card}/>
          </div>
        `)}
      </div>
    </div>
  `
}

const Card = () => {
  return html`
    <div className="h-0 relative overflow-hidden pt-1/1">
      <div className="flex flex-col p-4 absolute inset-0">
        <h3 className="font-mono text-sm xl:text-base">Golang</h3>
        <ul className="flex flex-col mt-4">
          ${[1,2,3].map(listItem => html`
            <li className="flex items-center mb-1">
              <img src="https://via.placeholder.com/100/FFFFFF" alt="" className="h-4 w-4 mr-2 border border-dashed"/>
              <span className="text-xs">Microservices</span>
            </li>
          `)}
        </ul>
      </div>
    </div>
  `
}
