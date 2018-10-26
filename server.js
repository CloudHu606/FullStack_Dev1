const express = require("express");

const app = express();

app.get("/api/dudes", (req, res) => {
  const dudes = [
    { id: 1, firstName: "OG", lastName: "skr" },
    { id: 2, firstName: "O", lastName: "666" },
    { id: 3, firstName: "G", lastName: "Ko" }
  ];

  res.json(dudes);
});

const port = 5000;

app.listen(port, () => console.log(`server start! Listening port ${port}`));
