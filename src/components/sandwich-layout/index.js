import { html } from "htm/preact";
import { Image } from "../media"
import { MediaNew } from "../media/media"

const SandWichLayout = (props) => {
  return html`
    <section className="flex flex-col lg:flex-row items-center py-16 lg:py-0 px-5 lg:px-0 relative">
      <div className="inset-0 h-full w-full absolute flex">
        <div className="hidden lg:block h-full -mr-32">
          <${MediaNew} ...${props.leftMedia} className="h-full object-cover object-right"/>
        </div>
        <div className="container flex-shrink-0"></div>
        <div className="hidden lg:block h-full -ml-32">
          <${MediaNew} ...${props.rightMedia} alt="" className="h-full object-cover object-left"/>
        </div>
      </div>
      <div className="container lg:hidden mt-8">
        <${MediaNew} ...${props.mobileMedia} alt="" className="mx-auto"/>
      </div>
    </section>
  `;
};

export { SandWichLayout }
