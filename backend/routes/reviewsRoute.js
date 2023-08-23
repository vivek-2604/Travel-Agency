import express from "express";

import { createReview } from "../controllers/reviewController.js";
import { verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.post("/:tourId", verifyUser, createReview);
router.get("/demo", (req,res) => {
    res.cookie("hello", "hello")
    res.send("Done")
})

export default router;
