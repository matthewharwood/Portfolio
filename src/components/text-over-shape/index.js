import { html } from "htm/preact";
import { SpacingContainer } from "../_parts/spacer";

export const TextOverShape = (props) => {
  return html`
    <${SpacingContainer} name="TextOverShape" ...${props}>
      <section className="container">
        <div className="${props.maxWidthMobile} ${props.maxWidthDesktop} mx-auto">
          <div
            className="flex relative rounded-full aspect-ratio-square bg-${props.backgroundColor} my-0 mx-auto flex justify-center items-center"
          >
            <h3
              className="absolute transform translate-y-1/2 h-full justify-center items-center flex text-primary text-lg text-center lg:text-3xl font-mono"
            >
              ${props.text &&
              props.text[0] &&
              props.text[0].children.map((i) => {
                return html`
                  <${i._type}>
                    ${i.marks[0] === "strong" ? html`<b>${i.text}</b>` : i.text}
                  <//>
                `;
              })}
            </h3>
          </div>
        </div>
      </section>
    <//>
  `;
};
