const express = require("express");
const app = express();
const path = require("path");
const createError = require("http-errors");

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error", error: err });
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
