const DOMAIN = 'http://192.168.1.198:8080';
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
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
        <script type="module" src="${DOMAIN}/bundle.modern.js" defer></script>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
};
