import express from "express";
import { createNews } from "../controllers/newsController.js";

const router = express.Router();

router.post("/", createNews);


export default router;
