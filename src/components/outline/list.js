import {html} from 'htm/preact';
import {OutlineListItem} from './item';

const OutlineList = (props) => {
  const steps = props && props.steps || [1];

  return html`
    <ul className="grid grid-rows gap-16">
      ${steps.map((step, i) => {
          const text = step && step.text || 'Default Text';
          const description = step && step.description;
          return html`
            <${OutlineListItem} text="${text}" description="${description}" isLast="${i === props.steps.length - 1}"/>
          `;
        }
      )}
  </ul>`;
};

export {
  OutlineList,
}