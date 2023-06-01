//creates and initializes the express app
import "./util/env";

import express from "express";

export const app = express();

import nunjucks from "nunjucks";
nunjucks.configure("./web/views", {
  autoescape: true,
  express: app,
});

const oneWeek = 1000 * 60 * 60 * 24 * 7;

app.use("/asset", express.static("./web/assets", { maxAge: oneWeek }));

import https from "https";
import { getCertConfig } from "./util/getCertConfig";

const httpsCerts = getCertConfig();
const httpsPort = process.env.HTTPS_PORT || 443;
https.createServer(httpsCerts, app).listen(httpsPort);

import http from "http";

const httpPort = process.env.HTTP_PORT || 80;
http.createServer(app).listen(httpPort);
