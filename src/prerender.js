import {render} from 'preact-render-to-string';
import {Index} from './pages';
import {HtmlPage} from './pages/document';
import {copy, ensureDir, writeFile} from 'fs-extra';
import {join} from 'path';
import {Profile} from './pages/profile';
import {Work} from './pages/work';
import {Lab} from './pages/lab';
import {minify} from 'html-minifier';

import {html} from 'htm/preact';
import {AH} from './components/component_map';

import {Rorschach} from './pages/lab/rorschach';
import {withFooterAndRouter} from './layouts/with_footer_and_router';
import {WorkNikeJordanEditor} from './pages/work/nike-jordan-editor';
import {MarketingPathfinder} from './pages/work/marketing-pathfinder';
import {UberDotcomPerformance} from './pages/work/uber-dotcom-performance';

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
  {fileName: 'index', content: renderPage('Home Page', withFooterAndRouter({title: 'index'})(Index))},
  {fileName: 'profile', content: renderPage('Profile Page', withFooterAndRouter({title: 'profile'})(Profile))},
  {fileName: 'work', content: renderPage('Work Page', withFooterAndRouter({title: 'work'})(Work))},
  {fileName: 'lab', content: renderPage('Lab Page', withFooterAndRouter({title: 'lab'})(Lab))},
  {fileName: 'lab/rorschach', content: renderPage('Rorschach', withFooterAndRouter({title: 'rorschach'})(Rorschach))},
  {fileName: 'work/nike-jordan-editor', content: renderPage('Nike Jordan Editor', withFooterAndRouter({title: 'nike-jordan-editor'})(WorkNikeJordanEditor))},
  {fileName: 'work/marketing-pathfinder', content: renderPage('Marketing Pathfinder',  withFooterAndRouter({title: 'marketing-path-finder'})(MarketingPathfinder))},
  {fileName: 'work/uber-dotcom-performance', content: renderPage('Uber.com Performance', withFooterAndRouter({title: 'uber-com-performance'})(UberDotcomPerformance))},
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
      const deepDistDir = join(DIST_DIR, p.fileName);
      await ensureDir(deepDistDir);
      await writeFile(join(deepDistDir, 'index.html'), htmlMin(p.content));
    }
  }
}

main();
