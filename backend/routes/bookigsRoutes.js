import express from "express";

import { createBooking, getAllBooking, getBooking } from "../controllers/BookingController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);

export default router;
