const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
