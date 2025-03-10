import express from "express";
const router = express.Router();
import getAarmy, { geOriginal } from "../controller/mediaList.js";

router.get("/army", getAarmy);

export default router;
