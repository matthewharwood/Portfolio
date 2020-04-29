import { render } from "preact-render-to-string";
import express from "express";

import { Index } from "./pages";
import { HtmlPage } from "./pages/document";
import {Work} from './pages/work';
import {Profile} from './pages/profile';
import {Lab} from './pages/lab';
import livereload from "livereload";
import connectLivereload from "connect-livereload";
import {join} from 'path';
// open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();

liveReloadServer.watch(join(__dirname, 'pages'));


// ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const port = parseInt(process.env.PORT, 10) || 3000;
const server = express();

server.use(connectLivereload());

const renderPage = (title, page) => {
  return HtmlPage({ title, content: render(page) });
};

server.get("/", function(req, res) {
  res.send(renderPage("Home", Index()));
});

server.get("/work", function(req, res) {
  res.send(renderPage("Work", Work()));
});

server.get("/profile", function(req, res) {
  res.send(renderPage("Profile", Profile()));
});


server.get("/lab", function(req, res) {
  res.send(renderPage("Lab", Lab()));
});


server.listen(port, err => {
  if (err) throw err;
  console.log(`Ready on http://localhost:${port}`);
});
