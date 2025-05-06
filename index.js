import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import fileRouter from "./routers/fileRouter.js";
configDotenv();
const app = express();
app.use(express.json());

app.use(cors());
const port = process.env.PORT;

app.use(express.static("public"));
app.use("/api", userRouter); //     /api/getUser
app.use("/api", fileRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
