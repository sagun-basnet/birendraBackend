import express from "express";
import { getUser, postUser } from "../controllers/user.js";
import { checkUser } from "../middleware/checkuser.js";
const router = express.Router();

router.get("/getUser", getUser);
router.post("/postUser", checkUser, postUser);

export default router;
