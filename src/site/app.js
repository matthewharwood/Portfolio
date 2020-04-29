const { html } = require(`htm/preact`);
const {Something} = require('./js/components/something');

const sections = {
    something: Something,
};

module.exports = ({ page }) => html`
  <div>
    ${page.sections.map(({ data, name }) => html`
        <${sections[name]} data=${data}/>
    `)}
  </div>
`;