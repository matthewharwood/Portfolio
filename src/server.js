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

import { WorkNikeJordanEditor } from './pages/work/nike-jordan-editor'

const liveReloadServer = livereload.createServer();

liveReloadServer.watch(join(__dirname, 'src', 'pages'));


liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const port = parseInt(process.env.PORT, 10) || 3000;
const server = express();

server.use(connectLivereload());
server.use(express.static('/'));

server.use('/static', express.static(join(__dirname + '/static')));
const renderPage = (title, page) => {
  return HtmlPage({ title, content: render(page) });
};

server.get("/", function(req, res) {
  res.send(renderPage("Home", Index()));
});

server.get("/work", function(req, res) {
  res.send(renderPage("Work", Work()));
});

server.get("/work/nike-jordan-editor", function(req, res) {
  res.send(renderPage("Nike Jordan Editor", WorkNikeJordanEditor()));
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
