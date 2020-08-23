import { html } from "htm/preact";
import { Image } from "../media"
import { TextContainer } from "../text-container";
import { TextNode } from "../text-container/text-node";

const SandWichLayout = (props) => {
  const leftImageSource = props.leftImage.src.asset.url;
  const rightImageSource = props.rightImage.src.asset.url;
  return html`
    <section className="grid grid-cols-3 items-center">
      <div>
        <Image src="${leftImageSource}" className="mr-auto"/>
      </div>
      <${TextContainer} ...${props.textContainer}/>
      <div>
        <Image src="${rightImageSource}" className="ml-auto"/>
      </div>
    </section>
  `;
};


export { SandWichLayout }
