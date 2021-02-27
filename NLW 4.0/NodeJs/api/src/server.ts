import "reflect-metadata";
import "./database";
import express from "express";
import cors from "cors";
//import { router } from "./routes";
const app = express();

app.use(cors());
app.use(express.json());
//app.use(router);
app.get("/", (req, res) => {
  res.status(200).json({ status: "Success" });
});
app.listen(3000, () => {
  console.log("Server on");
});
