import {html} from 'htm/preact';

const ConditionalWrapper = ({condition, wrapper, children}) => {
  if (condition) {
    return html`
      <${wrapper}>
        ${children}
      <//>`;
  }
  return children;
};

export {ConditionalWrapper};
