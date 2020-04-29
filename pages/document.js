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
        <style>
        body {
          font-family: Helvetica, Arial, Sans-Serif;
          font-size:1.2em;
          margin:20px;
        }
        a{
          color:#000;
          display:inline-block;
          margin-right:20px;
        }
        a:hover{
          color:#888;
        }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
};
