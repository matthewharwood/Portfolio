const DOMAIN = 'http://localhost:3000';
export const HtmlPage = ({ title, content }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <meta name="description" content="Test OMG" />
        <meta name="author" content="Testing" />
        <link href="${DOMAIN}/static/styles.bundle.css" rel="stylesheet" />
        <script type="module" src="${DOMAIN}/static/bundle.modern.js" defer></script>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
};
