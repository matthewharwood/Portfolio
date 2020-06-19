import {html} from 'htm/preact';

const OutlineListItem = (props) => {
  const text = props &&  props.text || 'hello';
  const description = props && props.description;

  return html`
    <li className="grid grid-flow-row gap-6">
      <h4
        className="font-bold capitalize text-primary leading-none text-2xl"
      >
        ${text}
      </h4>
      <p >
        ${description}
      </p>
    </li>
  `;
};

export {
  OutlineListItem
}