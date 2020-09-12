import { AH } from "../components/component_map";
import { html } from "htm/preact";
import { SandWichLayout } from "../components/sandwich-layout";

export const Test = () => {
  return html`
    <div className="pt-32">
      <${CardIcons}/>
    </div>
  `;
};

const CardIcons = () => {
  return html`
    <section className="container md:px-5 lg:px-16 py-8 lg:py-16">
      <div className="grid grid-cols-10 gap-10">
        ${ [1,2,3,4,5,6,7,8,9,10].map(icon => html`
          <img src="https://via.placeholder.com/100" alt="" className="col-span-2 py-5"/>
        `) }
      </div>
    </section>
  `
}
