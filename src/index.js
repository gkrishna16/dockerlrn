const express = require(`express`);
const app = express();

app.get(`/`, function (req, res) {
  res.send("Welcome to my awesonme page.");
});

app.listen(3000, function () {
  console.log(`App is running via docker.`);
});
