import { html } from "htm/preact";
import { MediaNew } from '../media/media'
import {generateSpacingClassString} from '../_parts/spacer';

export const CardIcons = (props) => {
  const spacingClasses = generateSpacingClassString(props);
  return html`
    <section className="card-icons container ${spacingClasses}">
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
