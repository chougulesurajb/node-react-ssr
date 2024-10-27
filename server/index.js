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
        <script defer="defer" src="/static/js/main.a79a3e5a.js"></script>
        <link href="/static/css/main.28612a1d.css" rel="stylesheet">
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
        <script defer="defer" src="/static/js/main.a79a3e5a.js"></script>
        <link href="/static/css/main.28612a1d.css" rel="stylesheet">
    </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
  next();
});

// app.get("/br", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../build", "index.html"));
// });

// app.get("/serverside", (req, res) => {
//   app.use(
//     "/serverside",
//     express.static(path.resolve(__dirname, "../buildserver"))
//   );
//   app.use("/serverside", express.static(path.resolve(__dirname, "../build")));

//   const content = ReactDOMServer.renderToString(<AppServer />);
//   const html = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>React SSR</title>
//       </head>
//       <body>
//         <div id="root">${content}</div>
//       </body>
//     </html>
//   `;

//   res.send(html);
// });

// app.get("/serverside-react", (req, res) => {
//   app.use(
//     "/serverside-react",
//     express.static(path.resolve(__dirname, "../buildserver"))
//   );
//   app.use(
//     "/serverside-react",
//     express.static(path.resolve(__dirname, "../build"))
//   );

//   const content = ReactDOMServer.renderToString(<App />);
//   const html = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>React SSR</title>
//       </head>
//       <body>
//         <div id="root">${content}</div>
//       </body>
//     </html>
//   `;

//   res.send(html);
// });
app.use(rootRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
