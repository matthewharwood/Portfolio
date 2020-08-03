import {html} from 'htm/preact';

const OutlineListItem = (props) => {
  const name = props &&  props.name || 'hello';
  const description = props && props.description;

  return html`
    <li className="grid grid-flow-row gap-6">
      <h4
        className="font-bold capitalize text-primary leading-none text-2xl"
      >
        ${name}
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
