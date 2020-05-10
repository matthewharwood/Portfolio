import { html } from "htm/preact";
import { SummaryCard } from '../src/components/summary-card'

export default {
  title: 'Demo',
};

export const Heading = () => '<h1>Hello World</h1>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};

export const SummaryCardStory = () => html`<${SummaryCard}/>`
