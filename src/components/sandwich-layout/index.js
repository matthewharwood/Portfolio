import { html } from "htm/preact";
import { Image } from "../media";
import { MediaNew } from "../media/media";
import { TextContainer } from "../text-container";

const SandWichLayout = ({ leftMedia, rightMedia, mobileMedia, textNodes }) => {
  return html`
    <section className="flex flex-col lg:flex-row items-center py-16 lg:py-0 px-5 lg:px-0 relative">
      <div className="h-full w-full hidden lg:flex z-0 absolute inset-0">
        <div className="h-full w-full">
          <${MediaNew} ...${leftMedia} className="w-full h-full object-cover object-right"/>
        </div>
        <div className="flex-shrink-0 container flex items-center justify-center text-center">
        </div>
        <div className="h-full w-full">
          <${MediaNew} ...${rightMedia} alt="" className="w-full h-full object-cover object-left"/>
        </div>
      </div>
      <div className="relative z-10 min-h-64 w-full flex justify-center items-center">
        <div className="container text-center py-32">
          <${TextContainer} nodes="${textNodes.nodes}"/>
        </div>
      </div>
      <div className="container lg:hidden mt-8">
        <${MediaNew} ...${mobileMedia} alt="" className="mx-auto"/>
      </div>
    </section>
  `;
};

export { SandWichLayout }
