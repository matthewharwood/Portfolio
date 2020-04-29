const {html} = require('htm/preact');
const render = require('preact-render-to-string');

const Root = require('./app');

module.exports = class Page {
  data() {

    return {
      title: 'Setting up Eleventy with Preact and htm',
      layout: 'default',
      pagination: {
        data: `pages`,
        size: 1,
        alias: `page`,
        addAllPagesToCollections: true,
      },
      permalink: ({page}) => `/${page.slug}/index.html`,
    };
  }

  render(data) {
    return render(html`<${Root} page=${data.page}/>`);
  }
};