const express = require("express");
const session = require("express-session");
const logger = require("morgan");
const bodyParser = require("body-parser");
const { handleRequest } = require("./middleware");
const app = express();
const port = 3000;
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", handleRequest, (req, res) => {
  res.send(
    `You have requested this page  ${req.session.counter} times, you can refresh the page by clicking`
  );
});

app.post("/data", handleRequest, (req, res) => {
  if (!req.session.data) {
    req.session.data = [];
    
  }
  req.session.data.push(req.body);
  res.send(req.session.data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
