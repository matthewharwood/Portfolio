import { html } from "htm/preact";

const OutlineListItemDescription = (props) => {
  if (!props.description) {
    return null;
  }

  return html` <p>${props.description}</p> `;
};

const OutlineListItemName = (props) => {
  if (!props.name) {
    return null;
  }

  return html`
    <h4 className="text-primary leading-none text-xl underline">
      ${props.name}
    </h4>
  `;
};

const OutlineListItemBullet = (props) => {
  if (!props.number) {
    return null;
  }
  const dotsDisplayClass = props.isLast ? "hidden" : "block";

  return html`
    <div className="flex flex-col items-center">
      <div className="capitalize text-primary leading-none text-xl">
        ${props.number}
      </div>
      <div
        className="border-l h-16 border-black border-dashed my-4 ${dotsDisplayClass}"
      ></div>
    </div>
  `;
};

const OutlineListItem = (props) => {
  const name = (props && props.name) || "hello";
  const description = props && props.description;
  const number = (props && "•") || 1;
  const gap = description ? "gap-0" : null;
  return html`
    <li className="flex items-start">
      <${OutlineListItemBullet} number=${number} isLast="${props.isLast}" />
      <div className="grid grid-flow-row items-center  ${gap} pl-16 md-pl-0">
        <${OutlineListItemName} name="${name}" />
        <${OutlineListItemDescription} description="${description}" />
      </div>
    </li>
  `;
};

export { OutlineListItem };
