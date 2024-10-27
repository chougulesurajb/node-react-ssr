const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("../src/App").default;
const AppServer = require("../src/AppServer").default;
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const rootRouter = express.Router();

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

rootRouter.get("/br", (req, res, next) => {
  const content = ReactDOMServer.renderToString(<AppServer />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
         <head>
        <meta charset="utf-8"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="Web site created using create-react-app"/>
        <link rel="apple-touch-icon" href="/logo192.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <title>React App</title>
        <script defer="defer" src="/main.js"></script>
        <link href="/main.css" rel="stylesheet">
    </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});

app.get("/", (req, res, next) => {
  const content = ReactDOMServer.renderToString(<App />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="utf-8"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="Web site created using create-react-app"/>
        <link rel="apple-touch-icon" href="/logo192.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <title>React App</title>
        <script defer="defer" src="/main.js"></script>
        <link href="/main.css" rel="stylesheet">
    </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
