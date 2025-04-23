import express from "express";
import {
  getUser,
  postUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/user.js";
import { checkUser } from "../middleware/checkuser.js";
const router = express.Router();

router.get("/getUser", getUser);
router.post("/postUser", postUser);
router.get("/get-user-by-id/:pid", getUserById);
router.post("/delete-user/:id", deleteUser);
router.post("/update-user/:id", updateUser);

export default router;
