const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const PORT = 8080;

app.get("/api/jokes", (req, res) => {
  res.send([
    { id: "1", joke: "this is joke" },
    { id: "2", joke: "this is joke 2" },
    { id: "3", joke: "this is joke 3" },
    { id: "4", joke: "this is joke 4" },
    { id: "5", joke: "this is joke 5" },
  ]);
});

app.listen(PORT, () => {
  console.log("started on", PORT);
});
