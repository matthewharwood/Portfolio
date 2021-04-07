import { html } from "htm/preact";
import {SpacingContainer} from '../_parts/spacer';

export const TextOverShape = (props) => {
  return html`
    <${SpacingContainer} name="TextOverShape" ...${props}>
      <section>
        <div className="rounded-full w-50vh h-50vh bg-${props.backgroundColor} my-0 mx-auto flex justify-center items-center">
          <h3 className="text-primary text-lg text-center lg:text-3xl font-mono">
            ${props.text && props.text[0] && props.text[0].children.map(i => {
              return html`
                <${i._type}>
                    ${i.marks[0] === 'strong' ? html`<b>${i.text}</b>` : i.text}
                <//>
              `
            })}
          </h3>
        </div>
      </section>
    <//>
  `
}
