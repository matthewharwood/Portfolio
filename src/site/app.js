const { html } = require(`htm/preact`);


module.exports = ({ page }) => html`
  <div>
    ${page.slug}
  </div>
`;