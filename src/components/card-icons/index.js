import { html } from "htm/preact";
import { MediaNew } from '../media/media'
import {SpacingContainer} from '../_parts/spacer';

export const CardIcons = (props) => {
  return html`
    <${SpacingContainer} name="card-icons" ...${props}>
      <section className="container">
        <div className="flex lg:grid lg:grid-cols-5 lg:gap-20 lg:py-20 overflow-x-auto px-5 lg:px-0">
          ${ props.icons.map(icon => html`
            <div className="flex flex-col items-center justify-center mr-6 lg:mr-20 flex-shrink-0">
              <${MediaNew} ...${icon} className="h-16 w-16 lg:h-24 lg:w-24 object-contain"/>
              <span className="mt-2 lg:mt-5">${icon.alt}</span>
            </div>
          `) }
        </div>
      </section>
    <//>
  `
}
