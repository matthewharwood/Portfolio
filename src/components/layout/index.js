import {html} from 'htm/preact';

const Section = ({children}) => {
  return html`
      <div>Section - ${children}</div>
  `;
};

const Container = ({children}) => {

  return html`
    <div>Container - ${children}</div>
  `;
};

const Grid = ({children}) => {
  return html`
    <div>Grid - ${children}</div>
  `;
};

export {
  Section,
  Container,
  Grid,
};