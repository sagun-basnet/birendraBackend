import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
configDotenv();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.use("/api", userRouter); //     /api/getUser

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
