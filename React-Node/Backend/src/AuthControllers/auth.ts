import { Router } from "express";
import { SignUpRequest, User } from "./types";
import { UserHandler } from "./authutils";

const authRouter=Router();

authRouter.post("/signin", (req, res) => {
  const {email,password} = req.body;
  const user=UserHandler.findUser(email,password);
  if (!user) {
    res.status(401).send({
      message: "Invalid email or password",
    });
  }
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
  };
  res.status(200).send({
    message: "User signed in successfully",
    user: payload,
  });
})


authRouter.post("/signup", (req, res) => {
  const { username, email, password } :SignUpRequest = req.body;
  const payload={
    username:username,
    email:email,
    password:password,
  }
  const user = UserHandler.addUser(payload);
  res.status(200).send({
    message: "User signed up successfully",
    user: user,
  });
})




export const authHandler={ authRouter };