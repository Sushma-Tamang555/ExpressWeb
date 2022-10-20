const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const static_Path = path.join(__dirname, "../public");
const template_Path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", template_Path);
hbs.registerPartials(partials_path);

app.use(express.static(static_Path));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Opps!!! page not found",
  });
});
app.listen(port, () => {
  console.log(`listening the port no ${port}`);
});
