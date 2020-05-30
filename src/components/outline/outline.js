import {html} from 'htm/preact';
import {OutlineList} from './list';


const Outline = (props) => {
  const title = props?.title ?? 'Default Title';
  return html`
    <section className="py-16">
      <div className="container px-5 lg:px-16 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5 flex items-center lg:block lg:items-start mb-10 lg:mb-0">
          <h3 className="text-3xl uppercase flex-shrink-0">${title}</h3>
          <div className="ml-5 w-full border-t border-b lg:hidden" />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <${OutlineList} ...${props} />
        </div>
      </div>
    </section>
  `;
};


export {Outline};
