import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  getToursBySearch,
  updateTour,
  getFeaturedTours,
  getTourCount,
} from "../controllers/TourController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.post("/", verifyAdmin, createTour);
router.put("/:id", verifyAdmin, updateTour);
router.delete("/:id", verifyAdmin, deleteTour);
router.get("/singletour/:id", getSingleTour);
router.get("/",getAllTour);
router.get("/search/gettourbysearch", getToursBySearch);
router.get("/getfeaturedtours", getFeaturedTours);
router.get("/gettourcount", getTourCount);

export default router;
