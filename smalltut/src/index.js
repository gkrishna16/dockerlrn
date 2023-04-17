const express = require(`express`);
const app = express();
const port = 3000;

app.get(`/`, function (req, res) {
  res.send("Welcome to my awesonme page.");
});

app.listen(port, function () {
  console.log(`App is running via docker.`);
});
