import {html} from 'htm/preact';

const Spacer = ({top = 0, bottom = 0, left = 0, right = 0, children, className}) => {

  return html`
    <div className="pt-${top} pb-${bottom} pl-${left} pr-${right} ${className}">
      ${children}
    </div>
  `;
};

export {
  Spacer
};
