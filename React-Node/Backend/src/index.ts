import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { authHandler } from "./AuthControllers/auth";
import { PostHandler } from "./postControllers/post";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth",authHandler.authRouter);

app.use("/posts",PostHandler.postRouter);


app.listen(8000, () => {
 console.log("Server is running on port 8000");
});