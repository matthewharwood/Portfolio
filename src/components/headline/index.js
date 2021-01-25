import { html } from "htm/preact";
import {Mono, Sans} from '../typography';


const HeadlineNumber = (props) => {
  if(!props.number) {
    return null;
  }

  return html`
    <span>${props.span}</span>
  `;
};
const HeadlineTitle = (props) => {
  if(!props.title) {
    return null;
  }
  return html`
    <h3 className="${Mono.xl4} mb-2">${props.title}</h3>
  `
}

const HeadlineText = (props) => {
  if(!props.text) {
    return text;
  }

  return html`
    <div className="col-span-3 lg:col-span-2 ${Sans.xl}">${props.text}</div>
  `
};

const HeadlineBorder = (props) => {
  if(props.hasBorder) {
    return html`
      <div className="container px-5 lg:px-16 w-full">
        <div className="h-px w-full bg-border" />
      </div>
    `
  }
  return null;
};

 const Headline = ({ hasBorder, number, title, text }) => {
  return html`
    <section>
      <div className="container px-5 lg:px-16 py-8 lg:py-16 grid grid-cols-3">
        <div className="col-span-3">
          <${HeadlineNumber} number="${number}" />
          <${HeadlineTitle} title="${title}" />
        </div>
        <${HeadlineText} text="${text}" />
      </div>
      <${HeadlineBorder} hasBorder="${hasBorder}" />
    </section>
  `;
};

 export {
   Headline
 }

