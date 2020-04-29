import { render } from "preact-render-to-string";
import { Index } from "./pages";
import { HtmlPage } from "./pages/document";
import {copy, ensureDir, writeFile} from 'fs-extra';
import {join} from 'path';
import {Profile} from './pages/profile';
import {Work} from './pages/work';
import {Lab} from './pages/lab';

const renderPage = (title, page) => {
  return HtmlPage({ title, content: render(page) });
};


const pages = [
  {fileName: 'index', content: renderPage("Home Page", Index())},
  {fileName: 'profile', content: renderPage("Profile Page", Profile())},
  {fileName: 'work', content: renderPage("Work Page", Work())},
  {fileName: 'lab', content: renderPage("Lab Page", Lab())},
];
const DIST_DIR = join(__dirname, 'dist');
const SRC_DIR = join(__dirname, 'src', 'pages');
const STATIC = join(__dirname, 'src', 'static');

async function main() {
  await ensureDir(DIST_DIR);
  await copy(STATIC, join(DIST_DIR, 'static'));
  for await (const p of pages) {
    if (p.fileName === 'index') {
      await writeFile(join(DIST_DIR, 'index.html'), p.content);
    } else {
      const deepDistDir = join(DIST_DIR, p.fileName);
      await ensureDir(deepDistDir);
      await writeFile(join(deepDistDir, 'index.html'), p.content);
    }
  }
}

main();
