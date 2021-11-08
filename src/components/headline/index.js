import { html } from "htm/preact";
import { Mono, Sans } from "../typography";
import {
  SpacingContainer,
  generateCustomSpacingClassString,
} from "../_parts/spacer";

const HeadlineNumber = (props) => {
  if (!props.number) {
    return null;
  }

  return html` <span>${props.span}</span> `;
};

const HeadlineTitle = (props) => {
  if (!props.title) {
    return null;
  }
  return html` <h3 className="${Mono.xl4} mb-2">${props.title}</h3> `;
};

const HeadlineText = (props) => {
  if (!props.text) {
    return null;
  }

  return html`
    <div
      className="mt-1 col-span-3 lg:col-span-2 ${Sans.xl} ${props.className}"
    >
      ${props.text}
    </div>
  `;
};

const HeadlineBorder = (props) => {
  if (props.hasBorder) {
    return html`
      <div className="container px-5 lg:px-16 w-full">
        <div className="h-px w-full bg-border" />
      </div>
    `;
  }
  return null;
};

const Headline = (props) => {
  const textSpacingClass = generateCustomSpacingClassString("text", props);
  const { hasBorder, number, title, text = "" } = props;
  return html`
    <${SpacingContainer} ...${props} name="Headline">
      <section>
        <div className="container grid grid-cols-3">
          <div className="col-span-3">
            <${HeadlineNumber} number="${number}" />
            <${HeadlineTitle} title="${title}" />
          </div>
          <${HeadlineText} text="${text}" className="${textSpacingClass}" />
        </div>
        <${HeadlineBorder} hasBorder="${hasBorder}" />
      </section>
    <//>
  `;
};

export { Headline };
