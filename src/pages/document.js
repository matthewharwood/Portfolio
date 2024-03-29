// const DOMAIN = 'http://localhost:3000';
export const HtmlPage = ({ title, content, navigation }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <meta name="description" content="A digital portfolio created by and for Matthew Harwood to showcase his thoughts and his interests" />
        <meta name="author" content="Matthew Harwood" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Lato&family=Space+Mono:wght@400;700&display=swap" crossorigin>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
        <link rel="preconnect" href="https://res.cloudinary.com/" crossorigin>
        <link rel="preconnect" href="https://stats.g.doubleclick.net/" crossorigin>
        <link rel="preconnect" href="https://www.google-analytics.com/" crossorigin>

        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
        <link href="/static/styles.bundle.css" rel="stylesheet" />
        <meta name="description" content="A front-end engineer that mixes art, design, and technology, to create effective experiences that deliver value at scale">
        <meta name=”keywords” content=”front-end developer, front-end development, front-end engineer, web designer” />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="Matty0187" />
        <meta name="twitter:creator" content="@Matty0187" />
        <meta property="og:url" content="https://morningharwood.com/" />
        <meta property="og:title" content="Good Morning Harwood" />
        <meta property="og:description" content="A digital portfolio created by and for Matthew Harwood to showcase his thoughts and his interests" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image" content='https://res.cloudinary.com/morningharwood/image/upload/v1588954497/og-homepage.jpg' />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="314" />
        <meta property="og:image:alt" content="Morning Harwood: A Portfolio for Matthew Harwood" />
        <meta name="generator" content="Preact" />

        <meta name="theme-color" content="#fafafa">
        <script type="module" src="/static/bundle.modern.js" defer></script>
      </head>
      <body class="transition-colors ease-in-out duration-1000">
        ${navigation}
        <main data-router-wrapper>
          ${content}
        </main>
        <script>
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('static/service-worker.js');
          });
        }
        </script>
        <script>
          window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
          ga('create', 'UA-31350832-2', 'auto'); ga('set', 'anonymizeIp', true); ga('set', 'transport', 'beacon'); ga('send', 'pageview')
        </script>
        <script src="https://www.google-analytics.com/analytics.js" defer></script>
      </body>
    </html>
  `;
};
