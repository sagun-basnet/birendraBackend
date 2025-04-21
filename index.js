import express from "express";
import { configDotenv } from "dotenv";
import userRouter from "./routers/userRouter.js";
configDotenv();
const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use("/api", userRouter); //     /api/getUser

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
