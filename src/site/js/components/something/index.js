const htm = require('htm');
const { h } = require("preact");
const html = htm.bind(h);

const Something = () => {
  return html`
      <div>Something</div>
  `
}

module.exports = {
  Something,
}
