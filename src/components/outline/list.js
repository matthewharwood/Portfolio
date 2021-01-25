import {html} from 'htm/preact';
import {OutlineListItem} from './item';

const OutlineList = (props) => {
  const steps = props && props.steps || [1];

  return html`
    <ul className="grid grid-rows gap-16 pt-6 pb-6 pr-6 md:p-0">
      ${steps.map((step, i) => {
          const name = step && step.name || 'Default Text';
          const description = step && step.description;
          return html`
            <${OutlineListItem}
              name="${name}"
              description="${description}"
              index="${i + 1}" isLast="${i === props.steps.length - 1}"/>
          `;
        }
      )}
  </ul>`;
};

export {
  OutlineList,
}
