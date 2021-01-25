import {html} from 'htm/preact';

const OutlineListItemDescription = (props) => {
  if(!props.description) {
    return null;
  }

  return html`
    <p>
      ${props.description}
    </p>
  `
}

const OutlineListItemName = (props) => {
  if(!props.name) {
    return null;
  }

  return html`
    <h4 className="capitalize text-primary leading-none text-xl">
      ${props.name}
    </h4>
  `;
}
const OutlineListItem = (props) => {
  const name = props &&  props.name || 'hello';
  const description = props && props.description;

  return html`
    <li className="grid grid-flow-row ${description ? "gap-6" : null} pl-16 md-pl-0">
      <${OutlineListItemName} name="${name}" />
      <${OutlineListItemDescription} description="${description}" />
    </li>
  `;
};

export {
  OutlineListItem
}
