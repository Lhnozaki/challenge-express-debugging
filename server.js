const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;
const home = require("./routes/home");
const about = require("./routes/about");
const contact = require("./routes/contact");

app.use(express.static(path.join(__dirname, "public")));
app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");

app.use("/", home);
app.use("/about", about);
app.use("/contact", contact);

app.get("*", (req, res) => {
  res.send("smoke test");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
