const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/home", (req, res) => {
  res.render("home.ejs");
});
app.get("/skills", (req, res) => {
  res.render("skills.ejs");
});
app.get("/project", (req, res) => {
  res.render("project.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(8080, () => {
  console.log(`app listening on port 8080`);
});
