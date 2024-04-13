const express = require("express");
const app = express();
const port = 2000;

app.get("/sum", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const total = parseInt(a) + parseInt(b);
  res.send(total.toString());
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
