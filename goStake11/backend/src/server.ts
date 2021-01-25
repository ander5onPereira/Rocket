import express from "express";

const app = express();

app.get("/project", (req, res) => {
  return res.send("OK");
});

app.listen(3333, () => {
  console.log(" 👏 Inicio Server");
});
