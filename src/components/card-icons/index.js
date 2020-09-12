import { html } from "htm/preact";
import { TextContainer } from "../text-container"
import { MediaNew } from '../media/media'

export const CardIcons = (props) => {
  console.log(props.media[0].imgSrc.asset.source);
  return html`
    <section className="container md:px-5 lg:px-16 py-8 lg:py-16">
      <${TextContainer} ...${props.title}/>
      <div className="grid grid-cols-5 gap-10">
        ${ props.media.map(icon => html`
          <div className="flex flex-col items-center">
            <${MediaNew} ...${icon} className="h-20 w-20"/>
            <span className="mt-5">${icon.alt}</span>
          </div>
        `) }
      </div>
    </section>
  `
}
