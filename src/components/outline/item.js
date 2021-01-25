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
    <h4 className="text-primary leading-none text-xl">
      ${props.name}
    </h4>
  `;
}


const OutlineListItemBullet = (props) => {
  if(!props.number) {
    return null;
  }

  return html`
    <span className="absolute capitalize text-primary leading-none text-xl">${props.number}</span>
  `;
};

const OutlineListItem = (props) => {
  const name = props &&  props.name || 'hello';
  const description = props && props.description;
  const number = props && `-` || 1;
  return html`
    <li className="relative">
      <${OutlineListItemBullet} number=${number} />
      <div className="grid grid-flow-row items-center  ${description ? "gap-6" : null} pl-16 md-pl-0">
        <${OutlineListItemName} name="${name}" />
        <${OutlineListItemDescription} description="${description}" />
      </div>
    </li>
  `;
};

export {
  OutlineListItem
}
