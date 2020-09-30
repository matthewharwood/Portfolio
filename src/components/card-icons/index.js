import { html } from "htm/preact";
import { MediaNew } from '../media/media'

export const CardIcons = (props) => {
  return html`
    <section className="container md:px-5 lg:px-16 py-8 lg:py-16">
      <div className="flex lg:grid lg:grid-cols-5 lg:gap-20 lg:py-20 overflow-x-auto px-5 lg:px-0">
        ${ props.icons.map(icon => html`
          <div className="flex flex-col items-center justify-center mr-20 flex-shrink-0">
            <${MediaNew} ...${icon} className="h-24 w-24 object-contain"/>
            <span className="mt-5">${icon.alt}</span>
          </div>
        `) }
      </div>
    </section>
  `
}
