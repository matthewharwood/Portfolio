import { html } from "htm/preact";
import { Image } from "../media"
import { TextContainer } from "../text-container";
import { TextNode } from "../text-container/text-node";
import { MediaNew } from "../media/media"

const SandWichLayout = (props) => {
  return html`
    <section className="flex flex-col lg:flex-row items-center py-16 lg:py-0 px-5 lg:px-0">
      <div className="hidden lg:block min-w-64">
        <${MediaNew} ...${props.leftMedia} alt="" className="mr-auto"/>
      </div>
      <${TextContainer} ...${props.textContainer} className="container"/>
      <div className="container lg:hidden mt-8">
        <${MediaNew} ...${props.mobileMedia} alt="" className="mx-auto"/>
      </div>
      <div className="hidden lg:block min-w-64">
        <${MediaNew} ...${props.rightMedia} alt="" className="ml-auto"/>
      </div>
    </section>
  `;
};

export { SandWichLayout }
