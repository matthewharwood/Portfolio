# Morning Harwood

A Portfolio by Matthew harwood

This is a working example of a SSG with partial(selective) hydration[⚡🧩💦].

## Why

> The server and client render should not be 1:1.
> Don't render buttons on the server that require JS to work.
> Don't ship code to the client that simply repeats what the server has already done

- https://twitter.com/jaffathecake/status/1230388412806520833

## Inspired by:

- https://markus.oberlehner.net/blog/building-partially-hydrated-progressively-enhanced-static-websites-with-isomorphic-preact-and-eleventy/#demo-and-full-code
- https://developers.google.com/web/updates/2019/02/rendering-on-the-web

## Technology

- htm/preact
- preact/hooks
- web-components
- TailwindCSS
- PostCSS / PurgeCSS
- Hosted by www.render.com for the Brotli Compression
- Quicklinks
- Turbolinks inspired router based on HighwayJS
- AnimeJS (Animation)

## Up and Running

- `npm i`
- `npm run dev`

## Production build

- `npm run build`

## TODO:
- Add search Algolia - https://www.algolia.com/pricing/
- Outer Router Animations.
- Think about how I can get client side console.logs during dev.
- Set up production workflow for deployment. dotenv etc.
- Build a unique component chunk and prerender each page with
- ServiceWorkers https://developers.google.com/web/updates/2019/02/rendering-on-the-web
- Have a monorepo command line like nx?
- Figure out DI (maybe nestjs)

## Done

- Prefetch templates based on Quicklinks.
- Lazy evaluate hydrated components with intersection observer
- Add Popmotion Pure
- Add Highway JS
- Tailwind integration.
- Add Preact and Partial Hydration
- PurgeCSS.
- Put in hydration for clientside
- html minification.
