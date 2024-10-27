const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("../src/App").default;
const AppServer = require("../src/AppServer").default;
const path = require("path");
const app = express();
const fs = require("fs");
const PORT = process.env.PORT || 3001;
const rootRouter = express.Router();

rootRouter.get("/", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

rootRouter.get("/react", async (req, res, next) => {
  const content = ReactDOMServer.renderToString(<App />);
  await fs.readFile(
    path.resolve(__dirname, "../build", "index.html"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }

      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
      );
    }
  );
});

rootRouter.get("/react-ssr", async (req, res, next) => {
  const content = ReactDOMServer.renderToString(<AppServer />);
  await fs.readFile(
    path.resolve(__dirname, "../build", "index.html"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }

      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
      );
    }
  );
});

app.use(express.static(path.resolve(__dirname, "../buildserver")));
app.use(express.static(path.resolve(__dirname, "../build")));

app.use((req, res, next) => {
  if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
    next();
  }
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});

app.use(rootRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
