import { html } from "htm/preact";
import { Image } from "../media"
import { TextContainer } from "../text-container";
import { TextNode } from "../text-container/text-node";

const SandWichLayout = (props) => {
  const leftImageSource = props.leftImage.src.asset.url;
  const rightImageSource = props.rightImage.src.asset.url;
  const mobileImageSource = props.mobileImage.src.asset.url;
  return html`
    <section className="flex flex-col lg:flex-row items-center py-16 lg:py-0 px-5 lg:px-0">
      <div className="hidden lg:block min-w-64">
        <Image src="${leftImageSource}" className="mr-auto"/>
      </div>
      <${TextContainer} ...${props.textContainer} className="container"/>
      <div className="container lg:hidden mt-8">
        <Image src="${mobileImageSource}" className="mx-auto"/>
      </div>
      <div className="hidden lg:block min-w-64">
        <Image src="${rightImageSource}" className="ml-auto"/>
      </div>
    </section>
  `;
};


export { SandWichLayout }
