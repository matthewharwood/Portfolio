import {html} from 'htm/preact';
import {OutlineListItem} from './item';

const OutlineList = (props) => {
  const steps = props?.steps ?? [1];
  return html`
    <ul>
      ${steps && steps.map((step, i) => html`
        <${OutlineListItem} text="${step.text}" isLast="${i === steps.length - 1}"/>
      `
  )}
  </ul>`;
};

export {
  OutlineList,
}