import {html} from 'htm/preact';
import {OutlineListItem} from './item';

const OutlineList = (props) => {
  const steps = props && props.steps || [1]
  return html`
    <ul>
      ${steps.map((step, i) => {
        const text = step && step.text || 'Default Text'; 
        return html`
          <${OutlineListItem} text="${text}" isLast="${i === props.steps.length - 1}"/>
        `;
      }
  )}
  </ul>`;
};

export {
  OutlineList,
}