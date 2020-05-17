const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { MONGODB_URL } = require("./config/constant");

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "2mb" }));
app.use(bodyParser.json({ limit: "2mb" }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// error handler
app.use(function(err, req, res, next) {
  console.log(req.body);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const routes = require("./routes");
app.use("/api", routes);

const port = process.env.PORT || 4000;

app.listen(port, err => {
  if (err)
    console.log("Following error in start Project...................", err);
    
  console.log("***********************************************************");
  console.log(`       Project Running on Port ${port}.       `);
  console.log(`           http://localhost:${port}       `);
  console.log("***********************************************************");
});



mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true })
  .then(res => {
    console.log("\n | CONNECTED TO MONGO URL : %s\n", MONGODB_URL);
  })
  .catch(err => {
    console.error("\n | APP STARTING ERROR : %s\n", err.message);
    process.exit(1);
  });

module.exports = app;
