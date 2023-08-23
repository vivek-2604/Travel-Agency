import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/UserController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/singleuser/:id", verifyUser, getSingleUser);
router.get("/", verifyAdmin, getAllUser);

export default router;
