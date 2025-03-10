import express from "express";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3000;
import sql from "./db.js";
import client from "./prismaClient.js";
import media from "./router/mediaRouter.js";
// const sql =require('./db')
app.get("/", (req, res) => {
  res.send("qweflix Sedver On!");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/get", media);

app.listen(port, () => {
  console.log("Listening...");
});
