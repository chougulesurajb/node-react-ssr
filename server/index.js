const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const fs = require("fs");

const App = require("../src/App").default;
const AppServer = require("../src/AppServer").default;

const app = express();

const PORT = process.env.PORT || 3001;
const rootRouter = express.Router();

rootRouter.get("/", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

rootRouter.get("/about", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../about", "dist", "index.html"));
});

rootRouter.get("/dashboard", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../dashboard", "dist", "index.html"));
});

rootRouter.get("/ ", async (req, res, next) => {
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
app.use(express.static(path.resolve(__dirname, "../about/dist")));
app.use(express.static(path.resolve(__dirname, "../dashboard/dist")));
app.use(rootRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
