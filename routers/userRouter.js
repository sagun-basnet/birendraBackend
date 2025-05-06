import express from "express";
import {
  getUser,
  postUser,
  getUserById,
  deleteUser,
  updateUser,
  login,
} from "../controllers/user.js";
import { checkUser } from "../middleware/checkuser.js";
import upload from "../middleware/multerConfig.js";
const router = express.Router();

router.get("/getUser", getUser);
router.post("/postUser", upload.single("image"), postUser);
router.post("/login", login);
router.get("/get-user-by-id/:pid", getUserById);
router.post("/delete-user/:id", deleteUser);
router.post("/update-user/:id", updateUser);

export default router;
