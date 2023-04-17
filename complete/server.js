const express = require(`express`);
const app = express();

const path = require("path");

let usernames = [];
let passwords = [];

app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/register", function (req, res, next) {
  const { username, password } = req.body;

  try {
    usernames.push(username);
    password.push(passwords);
    res.json({ msg: `User registered.` });
  } catch (error) {}
});

app.post("/login", function (req, res, next) {
  const { username, password } = req.body;
});

app.listen(process.env.PORT || 5002, function () {
  console.log(`Server running on 5002`);
});
