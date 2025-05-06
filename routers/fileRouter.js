import express from "express";
import { handleFile } from "../controllers/file.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

router.post("/insert-file", upload.single("image"), handleFile);
// router.post("/insert-file", upload.array('image', 5), handleFile);

export default router;
