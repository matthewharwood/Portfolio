import {render} from 'preact-render-to-string';
import {Index} from './pages';
import {HtmlPage} from './pages/document';
import {copy, ensureDir, writeFile} from 'fs-extra';
import {join} from 'path';
import {Profile} from './pages/profile';
import {Work} from './pages/work';
import {Lab} from './pages/lab';
import {minify} from 'html-minifier';

import {WorkNikeJordanEditor} from './pages/work/nike-jordan-editor';
import {html} from 'htm/preact';
import {AH} from './components/component_map';
import {MarketingPathfinder} from './pages/work/marketing-pathfinder';
import {UberDotcomPerformance} from './pages/work/uber-dotcom-performance';
import { Rorschach } from './pages/lab/rorschach'

console.log(minify);
const htmlMin = (temp) => minify(temp, {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeTagWhitespace: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true,
  sortClassName: true,
  sortAttributes: true,
});

const renderPage = (title, page) => {
  return HtmlPage({title, content: render(page), navigation: render(html`<${AH.NavigationBar} />`)});
};


const pages = [
  {fileName: 'index', content: renderPage('Home Page', Index())},
  {fileName: 'profile', content: renderPage('Profile Page', Profile())},
  {fileName: 'work', content: renderPage('Work Page', Work())},
  {fileName: 'lab', content: renderPage('Lab Page', Lab())},
  {fileName: 'lab/rorschach', content: renderPage('Rorschach', Rorschach())},
  {fileName: 'work/nike-jordan-editor', content: renderPage('Nike Jordan Editor', WorkNikeJordanEditor())},
  {fileName: 'work/marketing-pathfinder', content: renderPage('Marketing Pathfinder', MarketingPathfinder())},
  {fileName: 'work/uber-dotcom-performance', content: renderPage('Uber.com Performance', UberDotcomPerformance())},
];
const DIST_DIR = join(__dirname, '../', 'dist');
const STATIC = join(__dirname, 'static');

async function main() {
  await ensureDir(DIST_DIR);
  await copy(STATIC, join(DIST_DIR, 'static'));
  for await (const p of pages) {
    if (p.fileName === 'index') {
      await writeFile(join(DIST_DIR, 'index.html'), htmlMin(p.content));
    } else {
      console.log(p.filename)
      const deepDistDir = join(DIST_DIR, p.fileName);
      await ensureDir(deepDistDir);
      await writeFile(join(deepDistDir, 'index.html'), htmlMin(p.content));
    }
  }
}

main();
